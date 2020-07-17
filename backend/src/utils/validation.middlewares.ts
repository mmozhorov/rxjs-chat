import * as express from "express";
import Ajv from 'ajv';

import * as schemas from '../../../common/validation/users.schema';

const ajv = new Ajv({ allErrors: true });

export const registerValidationMiddleware = (req: express.Request, res: express.Response, next) => {
    const validateFunction = ajv.compile(schemas.registerUserSchema);
    const isValid = validateFunction(req.body);

    return isValid ? next() : next(validateFunction.errors);
};
