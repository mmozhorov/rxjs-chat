import * as express from 'express';

import { findUserAndAuthenticate } from '../auth/authentication.middleware';

const router = express.Router();

router.post('/login', async (req: express.Request, res: express.Response) => {
    const token = await findUserAndAuthenticate(req.body);

    if ( token )
        res.status(200).json({ token });
    else
        res.status(401).json({ "message": "Token is incorrect" });
});

export default router;
