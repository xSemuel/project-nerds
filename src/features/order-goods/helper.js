const Joi = require('joi');

export const schema = Joi.object({
    firstName: Joi.string()
        .min(3)
        .max(30)
        .required(),

    lastName: Joi.string()
        .min(3)
        .max(30)
        .required(),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),

    telephone: Joi.string()
        .regex(/^[0-9]{10}$/),

    state: Joi.string()
        .min(3)
        .max(30)
        .required(),

    city: Joi.string()
        .min(3)
        .max(30)
        .required(),

    numberDepartment: Joi.string()
        .min(3)
        .max(30)
        .required(),

    adressDepartment: Joi.string()
        .min(3)
        .max(30)
        .required(), 

    dontCallback: Joi.boolean(),

        
})

export const validateForm = (form) => {
    const { error } = schema.validate(form, { abortEarly: false });
    if (!error) return null;

    const validationErrors = {};
    for (let item of error.details) {
      validationErrors[item.path[0]] = item.message;
    }

    return validationErrors;
};
