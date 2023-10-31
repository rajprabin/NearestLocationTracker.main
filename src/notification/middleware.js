const joi = require("joi");
const joiErrorHandler = require("../utils/joiErrorHandller/handler")

const sendNotificationInputValidation = (req, res, next) => {
    const notificationSchema = joi.object({
        token: joi.string().required(),
        title: joi.string().required(),
        body: joi.string().required(),
        payload: joi.object({
            user: joi.string()
        })
    });

    const { error } = notificationSchema.validate(req.body);

    if (error) {
        return res.status(400).send({ error: joiErrorHandler(error) })
    };

    next();
}


module.exports = {
    sendNotificationInputValidation
}

