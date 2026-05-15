const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');
const { User } = require('../models');

router.put('/profile', protect, authorize('patient'), async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.user._id,
            { name: req.body.name, phone: req.body.phone, patientProfile: req.body.patientProfile },
            { new: true }
        ).select('-password');
        res.json({ success: true, user });
    } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

module.exports = router;