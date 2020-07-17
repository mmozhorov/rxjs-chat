export const registerUserSchema = {
    type: 'object',
    required: ['username', 'password', 'name'],
    items: {
        name: { type: 'string', 'minLength': 3, 'maxLength': 30 },
        username: { type: 'string', 'minLength': 3, 'maxLength': 30 },
        password: { type: 'string', 'minLength': 6, 'maxLength': 30 },
        photo: { type: 'string' }
    }
};

export const loginUserSchema = {
    type: 'object',
    additionalProperties: false,
    required: ['username', 'password'],
    items: {
        username: { type: 'string', 'minLength': 3, 'maxLength': 30 },
        password: { type: 'string', 'minLength': 6, 'maxLength': 30 }
    }
};
