import express = require('express');
import bodyParser = require('body-parser');
import cors = require('cors');
import path = require('path');
import { config } from 'dotenv';

import { connectToDb } from './db/config';

import { authorization } from './auth/authorization.middleware';

import userRouter from './routers/user.router';
import messagesRouter from './routers/messages.router';
import friendsRouter from './routers/friends.router';

(async function main() {
    const env: any = config().parsed;
    await connectToDb(env);
    const app = express();

    app.use(cors());
    app.use(express.static(path.join(__dirname, '../build')));
    app.use(express.static(path.join(__dirname, '../public')));

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/user', userRouter);

    app.use(authorization);

    app.use('/friends', friendsRouter);
    app.use('/messages', messagesRouter);

    app.use('*', async (req, res, next) => {
        res.status(404).send('Not Found');
    });

    app.listen(env.APP_PORT, () => {
        console.log(`Server is running on ${env.APP_PORT} port!`);
    });
}());
