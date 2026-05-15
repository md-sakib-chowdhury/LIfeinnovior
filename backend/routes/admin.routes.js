const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');
const { getDashboardStats, getAllUsers, getUser, updateUser, deleteUser, getPlans, createPlan, updatePlan, deletePlan, getAllPayments, getAllBlogs, toggleBlogStatus } = require('../controllers/admin.controller');

router.use(protect, authorize('superadmin'));

router.get('/stats', getDashboardStats);
router.get('/users', getAllUsers);
router.get('/users/:id', getUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
router.get('/plans', getPlans);
router.post('/plans', createPlan);
router.put('/plans/:id', updatePlan);
router.delete('/plans/:id', deletePlan);
router.get('/payments', getAllPayments);
router.get('/blogs', getAllBlogs);
router.put('/blogs/:id/toggle', toggleBlogStatus);

module.exports = router;