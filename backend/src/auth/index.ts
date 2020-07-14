import * as express from 'express';
const jwt = require('jsonwebtoken');
const { config } = require('dotenv');

module.exports.authenticate = ( req: express.Request, res: express.Response, next ) => {
    const env = config().parsed;

    console.log(111);

    jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: 'foobar'
    }, env.JWT_KEY);

    next();
};
