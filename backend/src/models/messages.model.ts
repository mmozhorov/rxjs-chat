import mongoose = require('mongoose');

const messagesSchema = new mongoose.Schema({
    owner: { type:String, required: true },
    target: { type:String, required: true },
    time: { type: Number, required: true },
    text: { type: String, required: true }
});
const messagesModel = mongoose.model('messages', messagesSchema);

module.exports = messagesModel;
