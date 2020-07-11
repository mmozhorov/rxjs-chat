import * as express from 'express';
import { FriendsService } from '../services/friends.service';

const router = express.Router();

router.get('/', async (req: express.Request, res: express.Response ) => {
    const friends = await FriendsService.getAllFriends();

    res.status(200).json({ friends });
});

export default router;
