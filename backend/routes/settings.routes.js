const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');
const { SiteSettings } = require('../models');

// Public - get settings
router.get('/:key', async (req, res) => {
    try {
        const setting = await SiteSettings.findOne({ key: req.params.key });
        if (!setting) return res.status(404).json({ success: false, message: 'Setting not found' });
        res.json({ success: true, data: setting.value });
    } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

// Public - get all settings
router.get('/', async (req, res) => {
    try {
        const settings = await SiteSettings.find();
        const result = {};
        settings.forEach(s => result[s.key] = s.value);
        res.json({ success: true, data: result });
    } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

// Admin - create or update setting
router.post('/', protect, authorize('superadmin'), async (req, res) => {
    try {
        const { key, value } = req.body;
        const setting = await SiteSettings.findOneAndUpdate(
            { key },
            { key, value },
            { upsert: true, new: true }
        );
        res.json({ success: true, data: setting });
    } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

// Admin - delete setting
router.delete('/:key', protect, authorize('superadmin'), async (req, res) => {
    try {
        await SiteSettings.findOneAndDelete({ key: req.params.key });
        res.json({ success: true, message: 'Deleted' });
    } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

module.exports = router;