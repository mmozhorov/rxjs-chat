import express = require('express');
import bodyParser = require('body-parser');
import cors = require('cors');
import path = require('path');
import { config } from 'dotenv';

import { connectToDb } from './db/config';

import { authorization } from './auth/authorization.middleware';

import usersRouter from './routers/users.router';
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

    app.use('/api/user', usersRouter);

    app.use(authorization);

    app.use('/api/friends', friendsRouter);
    app.use('/api/messages', messagesRouter);

    app.use((err, req, res, next) => {
        if (err)
            res.status(err.status || 400 ).json({ 'message': err.message });
        else
            res.status(404).json({ 'message': 'Not Found' });
    });

    app.listen(env.APP_PORT, () => {
        console.log(`Server is running on ${env.APP_PORT} port!`);
    });
}());
