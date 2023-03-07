import Joi from 'joi';

const schema = Joi.object({
    name: Joi.string().required(),
    lastName: Joi.string().required(),
    city: Joi.string().required(),
    country: Joi.string().required(),
    birthdate: Joi.date().required(),
    imageUrl: Joi.string().required()
})

export default schema;


