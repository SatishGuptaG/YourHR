const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    qualification: String,
    resume: String
});

module.exports = mongoose.model('User', UserSchema);
