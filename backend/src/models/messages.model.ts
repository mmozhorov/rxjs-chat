const mongoose = require('mongoose');

const messagesSchema = new mongoose.Schema({
    friend: { type: String, required: true },
    messages: [
        {
            isOwn: { type: Boolean, required: true },
            time: { type: String, required: true },
            text: { type: String, required: true }
        }
    ]
});
const messagesModel = mongoose.model('messages', messagesSchema);

module.exports = messagesModel;