const messagesModel = require('../models/messages.model');

export class MessagesService{
    static async getMessages( friend ){
        return messagesModel.find({ friend }, {'_id': 0, '__v': 0, 'messages._id': 0});
    }

    static async postMessage( friend, message ){
        const { _id, messages } = await messagesModel.findOne({ friend });
        console.log(messages, message);
        return messagesModel.updateOne({_id}, {$set: {messages: [...messages, { text: message, isOwn: true, time: '11.22' }]}});
    }
}
