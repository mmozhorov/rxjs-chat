import { v4 as uuidv4 } from 'uuid';

const usersModel = require('../models/users.model');


const EXCLUDED_FIELDS = {'_id': 0, '__v': 0};

export class UsersService{
    static async getAllFriends(){
        return usersModel.find({ }, EXCLUDED_FIELDS);
    }

    static async getUser(username = "", password = ""){
        return usersModel.findOne({ username, password }, EXCLUDED_FIELDS);
    }

    static async isUserExist(username = ""){
        return usersModel.findOne({ username }, EXCLUDED_FIELDS);
    }

    static async createUser(user){
        const {
            username = "",
                password = "",
                name = "",
                photo = ""
        } = user;

        return await usersModel.create({
            id: uuidv4(),
            username,
            password,
            name,
            photo
        });
    }
}
