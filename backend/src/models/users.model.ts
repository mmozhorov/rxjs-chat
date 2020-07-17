const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    id: { type: String, isRequired: true },
    name: { type: String, isRequired: true },
    photo: { type: String },
    username: { type: String, isRequired: true },
    password: { type: String, isRequired: true },
    friends: [
        { type: String }
    ]
});

module.exports = mongoose.model('users', usersSchema);
