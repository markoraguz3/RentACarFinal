const Joi = require('@hapi/joi');

// register
const registerValidation = (data) => {
    const schema = Joi.object({
        firstName: Joi.string()
                    .min(3)
                    .required(),
        lastName: Joi.string()
                    .min(3)
                    .required(),
        email: Joi.string()
                    .min(8)
                    .email()
                    .required(),
        password: Joi.string()
                    .min(6)
                    .required(),
        birthDate: Joi.date()
                    .required(),
        roleId: Joi.string()
                    .required(),
    });

    return schema.validate(data);
}

const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string()
                    .min(8)
                    .email()
                    .required(),
        password: Joi.string()
                    .min(6)
                    .required(),
    })

    return schema.validate(data);
}


module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;