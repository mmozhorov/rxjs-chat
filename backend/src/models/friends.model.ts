import mongoose = require('mongoose');


const friendsSchema = new mongoose.Schema({
    id: { type: String, isRequired: true },
    name: { type: String, isRequired: true },
    photo: { type: String },
    username: { type: String, isRequired: true },
    password: { type: String, isRequired: true },
});
const friendsModel = mongoose.model('friends', friendsSchema);

module.exports = friendsModel;
