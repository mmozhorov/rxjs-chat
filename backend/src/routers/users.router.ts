import * as express from 'express';

import { registerValidationMiddleware, loginValidationMiddleware } from "../utils/validation.middlewares";
import { findUserAndAuthenticate } from '../auth/authentication.middleware';
import { UsersService } from "../services/users.service";

const router = express.Router();

router.post('/login', loginValidationMiddleware, async (req: express.Request, res: express.Response, next) => {
    const token = await findUserAndAuthenticate(req.body);

    if ( token )
        res.status(200).json({ token });
    else
        return next( { status: 401, "message": "Token is incorrect" } );
});

router.post('/register', registerValidationMiddleware, async (req: express.Request, res: express.Response, next) => {
    const { username = '' } = req.body;

    if ( await UsersService.isUserExist(username) )
        return next( { status: 400, "message": "User is already exist" } );

    const token = await findUserAndAuthenticate(await UsersService.createUser(req.body));

    if ( token )
        return res.status(200).json({ token });
    else
        return next( { status: 401, "message": "Token is incorrect" } );

});

export default router;
