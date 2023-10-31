const joi = require("joi");
const joiErrorHandler = require("../utils/joiErrorHandller/handler")

const getNearestLocationInputValidation = (req, res, next) => {
    const notificationSchema = joi.object({
        lat: joi.number().min(2).label("latitude").required(),
        long: joi.number().min(2).label("longitude").required()
    });

    const { error } = notificationSchema.validate(req.query);

    if (error) {
        return res.status(400).send({ error: joiErrorHandler(error) })
    };

    next();
}


module.exports = {
    getNearestLocationInputValidation
}

