const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    // Add other fields as needed
});

module.exports = mongoose.model('User', UserSchema);
