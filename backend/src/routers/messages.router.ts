import * as express from 'express';
import { MessagesService } from '../services/messages.service';

const router = express.Router();

router.get('/', async (req: express.Request, res: express.Response ) => {
    const messages = await MessagesService.getMessages();

    res.status(200).json({ messages });
});

export default router;