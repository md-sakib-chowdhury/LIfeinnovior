const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');
const { createAppointment, getAppointments, getAppointment, updateStatus, getVideoToken } = require('../controllers/appointment.controller');

router.use(protect);
router.post('/', authorize('patient'), createAppointment);
router.get('/', getAppointments);
router.get('/:id', getAppointment);
router.put('/:id/status', updateStatus);
router.get('/:id/video-token', getVideoToken);

module.exports = router;