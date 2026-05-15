const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');

router.use(protect);

router.post('/room', async (req, res) => {
    const roomName = `lifeinnovior-${req.body.appointmentId}`;
    res.json({ success: true, roomUrl: `https://meet.jit.si/${roomName}`, roomName });
});

module.exports = router;