import express = require('express');
import bodyParser = require('body-parser');
const queryParser = require('express-query-parser')
import cors = require('cors');
import path = require('path');
import { config } from 'dotenv';

import { connectToDb } from './db/config';
import messagesRouter from './routers/messages.router';

(async function main() {
    const env: any = config().parsed;
    await connectToDb(env);
    const app = express();

    app.use(cors());
    app.use(express.static(path.join(__dirname, '../build')));
    app.use(express.static(path.join(__dirname, '../public')));

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(
        queryParser({
            parseNull: true,
            parseBoolean: true
        })
    )

    app.use('/messages', messagesRouter);

    app.use('*', async (req, res, next) => {
        res.status(404).send('Not Found');
    });

    app.listen(env.APP_PORT, () => {
        console.log(`Server is running on ${env.APP_PORT} port!`);
    });
}());