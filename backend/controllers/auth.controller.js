const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { User } = require('../models');
const { sendEmail } = require('../utils/email');

const generateToken = (id) =>
    jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE });

exports.register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const allowedRoles = ['patient', 'psychologist'];
        if (role && !allowedRoles.includes(role)) {
            return res.status(400).json({ success: false, message: 'Invalid role' });
        }
        const existing = await User.findOne({ email });
        if (existing) return res.status(400).json({ success: false, message: 'Email already registered' });
        const user = await User.create({ name, email, password, role: role || 'patient' });
        if (user.role === 'psychologist') {
            user.psychologistProfile = {
                subscription: {
                    status: 'trial',
                    trialEndsAt: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000)
                }
            };
            await user.save();
        }
        const token = generateToken(user._id);
        res.status(201).json({
            success: true, token,
            user: { id: user._id, name: user.name, email: user.email, role: user.role }
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password)
            return res.status(400).json({ success: false, message: 'Please provide email and password' });
        const user = await User.findOne({ email });
        if (!user || !(await user.matchPassword(password)))
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        if (!user.isActive)
            return res.status(401).json({ success: false, message: 'Account has been deactivated' });
        const token = generateToken(user._id);
        res.json({
            success: true, token,
            user: { id: user._id, name: user.name, email: user.email, role: user.role, avatar: user.avatar }
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

exports.getMe = async (req, res) => {
    const user = await User.findById(req.user.id).select('-password');
    res.json({ success: true, user });
};

exports.forgotPassword = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(404).json({ success: false, message: 'No account with that email' });
        const resetToken = crypto.randomBytes(32).toString('hex');
        user.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
        user.resetPasswordExpire = Date.now() + 10 * 60 * 1000;
        await user.save({ validateBeforeSave: false });
        const resetUrl = `${process.env.CLIENT_URL}/reset-password/${resetToken}`;
        await sendEmail({
            to: user.email,
            subject: 'LifeInnovior - Password Reset',
            html: `<p>Click <a href="${resetUrl}">here</a> to reset your password. Expires in 10 minutes.</p>`
        });
        res.json({ success: true, message: 'Password reset email sent' });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

exports.resetPassword = async (req, res) => {
    try {
        const hashedToken = crypto.createHash('sha256').update(req.params.token).digest('hex');
        const user = await User.findOne({
            resetPasswordToken: hashedToken,
            resetPasswordExpire: { $gt: Date.now() }
        });
        if (!user) return res.status(400).json({ success: false, message: 'Invalid or expired token' });
        user.password = req.body.password;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;
        await user.save();
        res.json({ success: true, message: 'Password reset successful' });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

exports.updatePassword = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!(await user.matchPassword(req.body.currentPassword)))
            return res.status(401).json({ success: false, message: 'Current password is incorrect' });
        user.password = req.body.newPassword;
        await user.save();
        const token = generateToken(user._id);
        res.json({ success: true, token });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};