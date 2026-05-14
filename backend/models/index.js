const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, minlength: 6 },
    role: { type: String, enum: ['superadmin', 'psychologist', 'patient'], default: 'patient' },
    avatar: { type: String, default: '' },
    phone: { type: String, default: '' },
    isActive: { type: Boolean, default: true },
    isEmailVerified: { type: Boolean, default: false },
    emailVerifyToken: String,
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    psychologistProfile: {
        bio: { type: String, default: '' },
        specializations: [String],
        experience: { type: Number, default: 0 },
        sessionFee: { type: Number, default: 0 },
        languages: [String],
        education: [{ degree: String, institution: String, year: Number }],
        license: { type: String, default: '' },
        rating: { type: Number, default: 0 },
        totalReviews: { type: Number, default: 0 },
        availableSlots: [{
            day: { type: String, enum: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
            startTime: String,
            endTime: String
        }],
        subscription: {
            planId: { type: mongoose.Schema.Types.ObjectId, ref: 'SubscriptionPlan' },
            stripeCustomerId: String,
            stripeSubscriptionId: String,
            status: { type: String, enum: ['active', 'inactive', 'trial', 'cancelled'], default: 'trial' },
            trialEndsAt: Date,
            currentPeriodEnd: Date
        }
    },
    patientProfile: {
        dateOfBirth: Date,
        gender: { type: String, enum: ['male', 'female', 'other', 'prefer_not'] },
        emergencyContact: { name: String, phone: String, relation: String },
        medicalHistory: [String],
        currentConcerns: [String],
        assignedPsychologist: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    }
}, { timestamps: true });

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const subscriptionPlanSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    price: { monthly: Number, yearly: Number },
    stripePriceIdMonthly: String,
    stripePriceIdYearly: String,
    features: [String],
    maxPatients: { type: Number, default: 50 },
    isActive: { type: Boolean, default: true }
}, { timestamps: true });

const appointmentSchema = new mongoose.Schema({
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    psychologist: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    type: { type: String, enum: ['video', 'in-person', 'chat'], default: 'video' },
    status: { type: String, enum: ['pending', 'confirmed', 'cancelled', 'completed', 'no-show'], default: 'pending' },
    notes: { type: String, default: '' },
    cancelReason: String,
    sessionFee: Number,
    isPaid: { type: Boolean, default: false },
    paymentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Payment' },
    videoRoomId: String,
    reminderSent: { type: Boolean, default: false }
}, { timestamps: true });

const sessionNoteSchema = new mongoose.Schema({
    appointment: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' },
    psychologist: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    chiefComplaint: String,
    observations: String,
    diagnosis: String,
    treatmentPlan: String,
    homework: String,
    nextSessionGoals: String,
    mood: { type: String, enum: ['1', '2', '3', '4', '5'] },
    isConfidential: { type: Boolean, default: true },
    attachments: [{ name: String, url: String }]
}, { timestamps: true });

const paymentSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    psychologist: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    type: { type: String, enum: ['appointment', 'subscription'], required: true },
    amount: { type: Number, required: true },
    currency: { type: String, default: 'usd' },
    status: { type: String, enum: ['pending', 'completed', 'failed', 'refunded'], default: 'pending' },
    stripePaymentIntentId: String,
    stripeSessionId: String,
    description: String,
    metadata: mongoose.Schema.Types.Mixed
}, { timestamps: true });

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String, unique: true },
    content: { type: String, required: true },
    excerpt: String,
    coverImage: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    tags: [String],
    category: String,
    status: { type: String, enum: ['draft', 'published'], default: 'draft' },
    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 }
}, { timestamps: true });

const reviewSchema = new mongoose.Schema({
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    psychologist: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    comment: String,
    isAnonymous: { type: Boolean, default: false }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
const SubscriptionPlan = mongoose.model('SubscriptionPlan', subscriptionPlanSchema);
const Appointment = mongoose.model('Appointment', appointmentSchema);
const SessionNote = mongoose.model('SessionNote', sessionNoteSchema);
const Payment = mongoose.model('Payment', paymentSchema);
const Blog = mongoose.model('Blog', blogSchema);
const Review = mongoose.model('Review', reviewSchema);

module.exports = { User, SubscriptionPlan, Appointment, SessionNote, Payment, Blog, Review };