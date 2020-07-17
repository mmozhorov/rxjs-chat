const { config } = require('dotenv');
const mongoose = require('mongoose');

const messagesModel = require('./models/messages.model.ts');
const usersModel  = require('./models/users.model.ts');
const collections = require('./db/db.json');

async function clearDatabase() {
    await messagesModel.deleteMany();
    await usersModel.deleteMany();
}

async function fillDatabase() {
    await messagesModel.insertMany( collections.messages );
    await usersModel.insertMany( collections.users );
}

(async function migrate() {
    try {
        const env = config().parsed;
        console.log(`mongodb://${env.MONGODB_HOST}:${env.MONGODB_PORT}/rx-chat`);
        await mongoose.connect(`mongodb://${env.MONGODB_HOST}:${env.MONGODB_PORT}/rx-chat`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        await Promise.all([
            clearDatabase(),
            fillDatabase()
        ]);

        console.info('successful migration');
    }
    catch( error ){
        console.error(error);
    }
})();
