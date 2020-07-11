const friendsModel = require('../models/friends.model');

export class FriendsService{
    static async getAllFriends(){
        return friendsModel.find({ }, {'_id': 0, '__v': 0});
    }
}
