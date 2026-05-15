const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');
const { User } = require('../models');

router.get('/', async (req, res) => {
    try {
        const { search, specialization, page = 1, limit = 12 } = req.query;
        const query = { role: 'psychologist', isActive: true };
        if (search) query.$or = [{ name: { $regex: search, $options: 'i' } }];
        if (specialization) query['psychologistProfile.specializations'] = specialization;
        const psychologists = await User.find(query)
            .select('name avatar psychologistProfile.bio psychologistProfile.specializations psychologistProfile.sessionFee psychologistProfile.rating psychologistProfile.totalReviews psychologistProfile.experience psychologistProfile.languages')
            .limit(limit * 1).skip((page - 1) * limit);
        const total = await User.countDocuments(query);
        res.json({ success: true, psychologists, total });
    } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

router.get('/:id', async (req, res) => {
    try {
        const psychologist = await User.findOne({ _id: req.params.id, role: 'psychologist' }).select('-password -resetPasswordToken -emailVerifyToken');
        if (!psychologist) return res.status(404).json({ success: false, message: 'Not found' });
        res.json({ success: true, psychologist });
    } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

router.put('/profile/me', protect, authorize('psychologist'), async (req, res) => {
    try {
        const allowed = ['name', 'phone', 'avatar', 'psychologistProfile'];
        const updates = {};
        allowed.forEach(field => { if (req.body[field] !== undefined) updates[field] = req.body[field]; });
        const user = await User.findByIdAndUpdate(req.user._id, updates, { new: true }).select('-password');
        res.json({ success: true, user });
    } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

router.get('/my/patients', protect, authorize('psychologist'), async (req, res) => {
    try {
        const patients = await User.find({ 'patientProfile.assignedPsychologist': req.user._id })
            .select('name email avatar phone patientProfile createdAt');
        res.json({ success: true, patients });
    } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

module.exports = router;