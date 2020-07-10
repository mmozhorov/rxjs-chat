const messagesModel = require('../models/messages.model');

export class MessagesService{
    static async getMessages(){
        return await messagesModel.find({}, { '_id': 0, '__v': 0, 'messages._id': 0 });
    }
}