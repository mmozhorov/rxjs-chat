export const registerUserSchema = {
    type: 'array',
    required: ['username', 'password', 'name'],
    items: {
        "type": "object",
        "properties": {
            "name": {
                "type": "string",
                "minLength": 3,
                "maxLength": 30
            },
            "username": {
                "type": "string",
                "minLength": 3,
                "maxLength": 30
            },
            "password": {
                "type": "string",
                "minLength": 6,
                "maxLength": 30
            },
            "photo": {
                "type": "string"
            },
        }
    }
};

export const loginUserSchema = {
    type: 'array',
    required: ['username', 'password'],
    items: {
        "type": "object",
        "properties": {
            "username": {
                "type": "string",
                "minLength": 3,
                "maxLength": 30
            },
            "password": {
                "type": "string",
                "minLength": 6,
                "maxLength": 30
            },
        }
    }
};
