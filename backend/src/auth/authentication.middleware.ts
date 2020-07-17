const { config } = require('dotenv');
const jwt = require('jsonwebtoken');

import { UsersService } from "../services/users.service";

const env = config().parsed;

export const findUserAndAuthenticate = async ( { username = "", password = "" } ) => {
    const user = await UsersService.getUser( username , password );

    if (user)
        return jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
            user: user.id
        }, env.JWT_KEY);

    return null;
};
