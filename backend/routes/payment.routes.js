const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');
const { createSubscription, createAppointmentPayment, stripeWebhook, getMyPayments } = require('../controllers/payment.controller');

router.post('/webhook', stripeWebhook);
router.use(protect);
router.post('/subscribe', authorize('psychologist'), createSubscription);
router.post('/appointment', authorize('patient'), createAppointmentPayment);
router.get('/my', getMyPayments);

module.exports = router;