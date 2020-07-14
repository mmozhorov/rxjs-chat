const friendsModel = require('../models/friends.model');

const EXCLUDED_FIELDS = {'_id': 0, '__v': 0};

export class FriendsService{
    static async getAllFriends(){
        return friendsModel.find({ }, EXCLUDED_FIELDS);
    }

    static async getUser(username = "", password = ""){
        return friendsModel.findOne({ username, password }, EXCLUDED_FIELDS);
    }
}
