const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const User = require('../models/User');

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

// Route to handle user signup
router.post('/signup', upload.single('resume'), async (req, res) => {
    const { name, email, phone, qualification } = req.body;
    const resume = req.file.path;

    try {
        const user = new User({ name, email, phone, qualification, resume });
        await user.save();
        res.redirect('/success.html'); // Redirect to the success page
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
