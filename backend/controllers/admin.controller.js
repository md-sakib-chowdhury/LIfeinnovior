const { User, SubscriptionPlan, Appointment, Payment, Blog } = require('../models');

exports.getDashboardStats = async (req, res) => {
    try {
        const [totalUsers, totalPsychologists, totalPatients, totalAppointments, revenueData] = await Promise.all([
            User.countDocuments(),
            User.countDocuments({ role: 'psychologist' }),
            User.countDocuments({ role: 'patient' }),
            Appointment.countDocuments(),
            Payment.aggregate([{ $match: { status: 'completed' } }, { $group: { _id: null, total: { $sum: '$amount' } } }])
        ]);
        const activeSubscriptions = await User.countDocuments({ role: 'psychologist', 'psychologistProfile.subscription.status': 'active' });
        const recentUsers = await User.find().sort({ createdAt: -1 }).limit(5).select('name email role createdAt avatar');
        const monthlyRevenue = await Payment.aggregate([
            { $match: { status: 'completed', createdAt: { $gte: new Date(new Date().setMonth(new Date().getMonth() - 6)) } } },
            { $group: { _id: { month: { $month: '$createdAt' }, year: { $year: '$createdAt' } }, total: { $sum: '$amount' } } },
            { $sort: { '_id.year': 1, '_id.month': 1 } }
        ]);
        res.json({ success: true, stats: { totalUsers, totalPsychologists, totalPatients, totalAppointments, activeSubscriptions, totalRevenue: revenueData[0]?.total || 0 }, recentUsers, monthlyRevenue });
    } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};

exports.getAllUsers = async (req, res) => {
    try {
        const { role, status, search, page = 1, limit = 20 } = req.query;
        const query = {};
        if (role) query.role = role;
        if (status === 'active') query.isActive = true;
        if (status === 'inactive') query.isActive = false;
        if (search) query.$or = [{ name: { $regex: search, $options: 'i' } }, { email: { $regex: search, $options: 'i' } }];
        const users = await User.find(query).select('-password').sort({ createdAt: -1 }).limit(limit * 1).skip((page - 1) * limit);
        const total = await User.countDocuments(query);
        res.json({ success: true, users, total, pages: Math.ceil(total / limit), currentPage: page });
    } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};

exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');
        if (!user) return res.status(404).json({ success: false, message: 'User not found' });
        res.json({ success: true, user });
    } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};

exports.updateUser = async (req, res) => {
    try {
        const { isActive, role, name } = req.body;
        const user = await User.findByIdAndUpdate(req.params.id, { isActive, role, name }, { new: true, runValidators: true }).select('-password');
        if (!user) return res.status(404).json({ success: false, message: 'User not found' });
        res.json({ success: true, user });
    } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ success: false, message: 'User not found' });
        res.json({ success: true, message: 'User deleted successfully' });
    } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};

exports.getPlans = async (req, res) => {
    try {
        const plans = await SubscriptionPlan.find().sort({ createdAt: -1 });
        res.json({ success: true, plans });
    } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};

exports.createPlan = async (req, res) => {
    try {
        const plan = await SubscriptionPlan.create(req.body);
        res.status(201).json({ success: true, plan });
    } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};

exports.updatePlan = async (req, res) => {
    try {
        const plan = await SubscriptionPlan.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!plan) return res.status(404).json({ success: false, message: 'Plan not found' });
        res.json({ success: true, plan });
    } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};

exports.deletePlan = async (req, res) => {
    try {
        await SubscriptionPlan.findByIdAndDelete(req.params.id);
        res.json({ success: true, message: 'Plan deleted' });
    } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};

exports.getAllPayments = async (req, res) => {
    try {
        const { page = 1, limit = 20, status } = req.query;
        const query = status ? { status } : {};
        const payments = await Payment.find(query).populate('user', 'name email').sort({ createdAt: -1 }).limit(limit * 1).skip((page - 1) * limit);
        const total = await Payment.countDocuments(query);
        res.json({ success: true, payments, total, pages: Math.ceil(total / limit) });
    } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};

exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().populate('author', 'name avatar').sort({ createdAt: -1 });
        res.json({ success: true, blogs });
    } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};

exports.toggleBlogStatus = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) return res.status(404).json({ success: false, message: 'Blog not found' });
        blog.status = blog.status === 'published' ? 'draft' : 'published';
        await blog.save();
        res.json({ success: true, blog });
    } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};