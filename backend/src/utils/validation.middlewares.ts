import * as express from "express";
import Ajv from 'ajv';

import * as schemas from '../../../common/validation/users.schema';

const ajv = new Ajv({ allErrors: true });

const validate = ( data: any, schema: any) => {
    const validateFunction = ajv.compile(schema);
    const isValid = validateFunction(data);
    return isValid ? null : validateFunction.errors;
};

export const registerValidationMiddleware = (req: express.Request, res: express.Response, next) => {
    const errors = validate(req.body, schemas.registerUserSchema);
    return errors ? next() : next(errors);
};

export const loginValidationMiddleware = (req: express.Request, res: express.Response, next) => {
    const errors = validate(req.body, schemas.loginUserSchema);
    return errors ? next() : next(errors);
};
