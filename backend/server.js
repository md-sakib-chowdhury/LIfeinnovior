const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/payments/webhook', express.raw({ type: 'application/json' }));

app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/admin', require('./routes/admin.routes'));
app.use('/api/psychologist', require('./routes/psychologist.routes'));
app.use('/api/patient', require('./routes/patient.routes'));
app.use('/api/appointments', require('./routes/appointment.routes'));
app.use('/api/sessions', require('./routes/session.routes'));
app.use('/api/payments', require('./routes/payment.routes'));
app.use('/api/blog', require('./routes/blog.routes'));
app.use('/api/video', require('./routes/video.routes'));

app.get('/', (req, res) => res.json({ message: 'LifeInnovior API Running ✅' }));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ success: false, message: 'Server Error', error: err.message });
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('✅ MongoDB Connected');
        app.listen(process.env.PORT || 5000, () =>
            console.log(`🚀 Server running on port ${process.env.PORT || 5000}`)
        );
    })
    .catch(err => console.error('❌ DB Error:', err));