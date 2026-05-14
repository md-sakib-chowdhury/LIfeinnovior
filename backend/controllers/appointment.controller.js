const { Appointment, User } = require('../models');
const { sendEmail } = require('../utils/email');
const { v4: uuidv4 } = require('uuid');

exports.createAppointment = async (req, res) => {
    try {
        const { psychologistId, date, startTime, endTime, type, notes } = req.body;
        const psychologist = await User.findById(psychologistId);
        if (!psychologist || psychologist.role !== 'psychologist')
            return res.status(404).json({ success: false, message: 'Psychologist not found' });
        const conflict = await Appointment.findOne({ psychologist: psychologistId, date: new Date(date), startTime, status: { $in: ['pending', 'confirmed'] } });
        if (conflict) return res.status(400).json({ success: false, message: 'This slot is already booked' });
        const videoRoomId = type === 'video' ? uuidv4() : null;
        const appointment = await Appointment.create({
            patient: req.user._id, psychologist: psychologistId,
            date: new Date(date), startTime, endTime, type, notes,
            sessionFee: psychologist.psychologistProfile?.sessionFee || 0, videoRoomId
        });
        await appointment.populate('patient psychologist', 'name email phone');
        await sendEmail({
            to: req.user.email,
            subject: 'Appointment Confirmed - LifeInnovior',
            html: `<h2>Appointment Booked!</h2><p>Your appointment with Dr. ${psychologist.name} is confirmed for ${date} at ${startTime}.</p>`
        });
        res.status(201).json({ success: true, appointment });
    } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};

exports.getAppointments = async (req, res) => {
    try {
        const { status, page = 1, limit = 20 } = req.query;
        let query = {};
        if (req.user.role === 'patient') query.patient = req.user._id;
        else if (req.user.role === 'psychologist') query.psychologist = req.user._id;
        if (status) query.status = status;
        const appointments = await Appointment.find(query)
            .populate('patient', 'name email avatar phone patientProfile')
            .populate('psychologist', 'name email avatar psychologistProfile.sessionFee')
            .sort({ date: -1 }).limit(limit * 1).skip((page - 1) * limit);
        const total = await Appointment.countDocuments(query);
        res.json({ success: true, appointments, total });
    } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};

exports.getAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.findById(req.params.id)
            .populate('patient', 'name email avatar phone patientProfile')
            .populate('psychologist', 'name email avatar psychologistProfile');
        if (!appointment) return res.status(404).json({ success: false, message: 'Appointment not found' });
        res.json({ success: true, appointment });
    } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};

exports.updateStatus = async (req, res) => {
    try {
        const { status, cancelReason } = req.body;
        const appointment = await Appointment.findById(req.params.id).populate('patient psychologist', 'name email');
        if (!appointment) return res.status(404).json({ success: false, message: 'Appointment not found' });
        appointment.status = status;
        if (status === 'cancelled' && cancelReason) appointment.cancelReason = cancelReason;
        await appointment.save();
        if (['confirmed', 'cancelled'].includes(status)) {
            await sendEmail({
                to: appointment.patient.email,
                subject: `Appointment ${status} - LifeInnovior`,
                html: `<p>Your appointment has been <strong>${status}</strong>. ${cancelReason ? 'Reason: ' + cancelReason : ''}</p>`
            });
        }
        res.json({ success: true, appointment });
    } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};

exports.getVideoToken = async (req, res) => {
    try {
        const appointment = await Appointment.findById(req.params.id);
        if (!appointment) return res.status(404).json({ success: false, message: 'Not found' });
        if (appointment.status !== 'confirmed')
            return res.status(400).json({ success: false, message: 'Appointment not confirmed' });
        res.json({ success: true, roomId: appointment.videoRoomId, roomUrl: `https://meet.jit.si/lifeinnovior-${appointment.videoRoomId}` });
    } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};