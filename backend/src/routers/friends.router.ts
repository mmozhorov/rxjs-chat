import * as express from 'express';
import { UsersService } from '../services/users.service';

const router = express.Router();

router.get('/', async (req: express.Request, res: express.Response ) => {
    const friends = await UsersService.getAllFriends();

    res.status(200).json({ friends });
});

export default router;
