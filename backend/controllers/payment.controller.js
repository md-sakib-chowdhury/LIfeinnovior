const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { Payment, User, SubscriptionPlan, Appointment } = require('../models');

exports.createSubscription = async (req, res) => {
    try {
        const { planId, billingCycle } = req.body;
        const plan = await SubscriptionPlan.findById(planId);
        if (!plan) return res.status(404).json({ success: false, message: 'Plan not found' });
        const priceId = billingCycle === 'yearly' ? plan.stripePriceIdYearly : plan.stripePriceIdMonthly;
        let customerId = req.user.psychologistProfile?.subscription?.stripeCustomerId;
        if (!customerId) {
            const customer = await stripe.customers.create({ email: req.user.email, name: req.user.name });
            customerId = customer.id;
            await User.findByIdAndUpdate(req.user._id, { 'psychologistProfile.subscription.stripeCustomerId': customerId });
        }
        const session = await stripe.checkout.sessions.create({
            customer: customerId, mode: 'subscription', payment_method_types: ['card'],
            line_items: [{ price: priceId, quantity: 1 }],
            success_url: `${process.env.CLIENT_URL}/dashboard?subscribed=true`,
            cancel_url: `${process.env.CLIENT_URL}/pricing`,
            metadata: { userId: req.user._id.toString(), planId: planId.toString() }
        });
        res.json({ success: true, url: session.url });
    } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};

exports.createAppointmentPayment = async (req, res) => {
    try {
        const { appointmentId } = req.body;
        const appointment = await Appointment.findById(appointmentId).populate('psychologist', 'name psychologistProfile.sessionFee');
        if (!appointment) return res.status(404).json({ success: false, message: 'Appointment not found' });
        const amount = appointment.sessionFee * 100;
        const paymentIntent = await stripe.paymentIntents.create({ amount, currency: 'usd', metadata: { appointmentId: appointmentId.toString(), userId: req.user._id.toString() } });
        const payment = await Payment.create({ user: req.user._id, psychologist: appointment.psychologist._id, type: 'appointment', amount: appointment.sessionFee, stripePaymentIntentId: paymentIntent.id, description: `Session with ${appointment.psychologist.name}` });
        res.json({ success: true, clientSecret: paymentIntent.client_secret, payment });
    } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};

exports.stripeWebhook = async (req, res) => {
    let event;
    try {
        event = stripe.webhooks.constructEvent(req.body, req.headers['stripe-signature'], process.env.STRIPE_WEBHOOK_SECRET);
    } catch (err) { return res.status(400).send(`Webhook Error: ${err.message}`); }
    switch (event.type) {
        case 'checkout.session.completed': {
            const session = event.data.object;
            if (session.mode === 'subscription') {
                const { userId, planId } = session.metadata;
                await User.findByIdAndUpdate(userId, { 'psychologistProfile.subscription.status': 'active', 'psychologistProfile.subscription.planId': planId, 'psychologistProfile.subscription.stripeSubscriptionId': session.subscription });
                await Payment.create({ user: userId, type: 'subscription', amount: session.amount_total / 100, stripeSessionId: session.id, status: 'completed' });
            }
            break;
        }
        case 'payment_intent.succeeded': {
            const pi = event.data.object;
            await Payment.findOneAndUpdate({ stripePaymentIntentId: pi.id }, { status: 'completed' });
            if (pi.metadata.appointmentId) await Appointment.findByIdAndUpdate(pi.metadata.appointmentId, { isPaid: true });
            break;
        }
        case 'customer.subscription.deleted': {
            const sub = event.data.object;
            await User.findOneAndUpdate({ 'psychologistProfile.subscription.stripeSubscriptionId': sub.id }, { 'psychologistProfile.subscription.status': 'cancelled' });
            break;
        }
    }
    res.json({ received: true });
};

exports.getMyPayments = async (req, res) => {
    try {
        const payments = await Payment.find({ user: req.user._id }).sort({ createdAt: -1 });
        res.json({ success: true, payments });
    } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};