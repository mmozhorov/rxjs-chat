import * as express from 'express';
import { MessagesService } from '../services/messages.service';

const router = express.Router();

router.get('/', async (req: express.Request, res: express.Response ) => {
    const { friend = '' } = req.query;

    const result = await MessagesService.getMessages( friend );

    const messages = result.map( data => data.messages ).flat();

    res.status(200).json({ messages });
});

router.post( '/', async (req: express.Request, res: express.Response ) => {
    const { friend = '', message = '' } = req.body;

    const result = await MessagesService.postMessage(friend, message);

    res.status(200).json( result )
});

export default router;
