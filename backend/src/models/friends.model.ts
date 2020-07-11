const mongoose = require('mongoose');

const friendsSchema = new mongoose.Schema({
    name: { type: String, isRequired: true },
    photo: { type: String }
});
const friendsModel = mongoose.model('friends', friendsSchema);

module.exports = friendsModel;