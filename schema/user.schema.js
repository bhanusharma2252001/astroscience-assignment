const Joi = require('joi')
exports.userSchema = Joi.object({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    DOB :Joi.date().required(),
    POB : Joi.string().required()

})