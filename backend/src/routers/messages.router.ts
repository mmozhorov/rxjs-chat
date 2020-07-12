import * as express from 'express';
import { MessagesService } from '../services/messages.service';

const router = express.Router();

router.get('/', async (req: express.Request, res: express.Response ) => {
    const result = await MessagesService.getMessages(req.query.friend || '');
    const messages = result.map( data => data.messages ).flat();

    res.status(200).json({ messages });
});

export default router;
