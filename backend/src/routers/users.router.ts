import * as express from 'express';

import { registerValidationMiddleware } from "../utils/validation.middlewares";
import { findUserAndAuthenticate, checkIfUserExist } from '../auth/authentication.middleware';
import { FriendsService } from "../services/friends.service";

const router = express.Router();

router.post('/login', async (req: express.Request, res: express.Response) => {
    const token = await findUserAndAuthenticate(req.body);

    if ( token )
        res.status(200).json({ token });
    else
        res.status(401).json({ "message": "Token is incorrect" });
});

router.post('/register', registerValidationMiddleware, async (req: express.Request, res: express.Response) => {

    if ( await checkIfUserExist(req.body))
        res.status(400).json({ "message": "User is already exist" });

    const token = await findUserAndAuthenticate(await FriendsService.createUser(req.body));

    if ( token )
        res.status(200).json({ token });
    else
        res.status(401).json({ "message": "Token is incorrect" });

});

export default router;
