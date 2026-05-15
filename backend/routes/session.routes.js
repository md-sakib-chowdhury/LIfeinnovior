const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');
const { SessionNote } = require('../models');

router.use(protect);

router.post('/', authorize('psychologist'), async (req, res) => {
    try {
        const note = await SessionNote.create({ ...req.body, psychologist: req.user._id });
        res.status(201).json({ success: true, note });
    } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

router.get('/', async (req, res) => {
    try {
        const query = req.user.role === 'psychologist'
            ? { psychologist: req.user._id }
            : { patient: req.user._id, isConfidential: false };
        const notes = await SessionNote.find(query).populate('appointment').populate('patient', 'name avatar').sort({ createdAt: -1 });
        res.json({ success: true, notes });
    } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

router.get('/:id', async (req, res) => {
    try {
        const note = await SessionNote.findById(req.params.id).populate('patient psychologist', 'name avatar');
        if (!note) return res.status(404).json({ success: false, message: 'Note not found' });
        res.json({ success: true, note });
    } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

router.put('/:id', authorize('psychologist'), async (req, res) => {
    try {
        const note = await SessionNote.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({ success: true, note });
    } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

module.exports = router;