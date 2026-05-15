const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');
const { Blog } = require('../models');

router.get('/', async (req, res) => {
    try {
        const { page = 1, limit = 10, tag } = req.query;
        const query = { status: 'published' };
        if (tag) query.tags = tag;
        const blogs = await Blog.find(query).populate('author', 'name avatar').sort({ createdAt: -1 }).limit(limit * 1).skip((page - 1) * limit);
        const total = await Blog.countDocuments(query);
        res.json({ success: true, blogs, total });
    } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

router.get('/:slug', async (req, res) => {
    try {
        const blog = await Blog.findOneAndUpdate({ slug: req.params.slug, status: 'published' }, { $inc: { views: 1 } }, { new: true }).populate('author', 'name avatar');
        if (!blog) return res.status(404).json({ success: false, message: 'Blog not found' });
        res.json({ success: true, blog });
    } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

router.post('/', protect, authorize('psychologist', 'superadmin'), async (req, res) => {
    try {
        const slug = req.body.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + Date.now();
        const blog = await Blog.create({ ...req.body, slug, author: req.user._id });
        res.status(201).json({ success: true, blog });
    } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

router.put('/:id', protect, async (req, res) => {
    try {
        const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({ success: true, blog });
    } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

router.delete('/:id', protect, async (req, res) => {
    try {
        await Blog.findByIdAndDelete(req.params.id);
        res.json({ success: true, message: 'Deleted' });
    } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

module.exports = router;