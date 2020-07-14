const { config } = require('dotenv');
const mongoose = require('mongoose');

const messagesModel = require('./models/messages.model.ts');
const friendsModel = require('./models/friends.model.ts');
const { messages, friends } = require('./db/db.json');

async function clearDatabase() {
    await messagesModel.deleteMany();
    await friendsModel.deleteMany();
}

async function fillDatabase() {
    await messagesModel.insertMany(messages);
    await friendsModel.insertMany(friends);
}

(async function migrate() {
    try {
        const env = config().parsed;
        console.log(`mongodb://${env.MONGODB_HOST}:${env.MONGODB_PORT}/rx-chat`);
        await mongoose.connect(`mongodb://${env.MONGODB_HOST}:${env.MONGODB_PORT}/rx-chat`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        await clearDatabase();
        await fillDatabase();

        console.info('successful migration');
    }
    catch( error ){
        console.error(error);
    }
})();
