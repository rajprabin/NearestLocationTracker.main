const express = require("express");
const router = express.Router();
const { sendNotification } = require("./service");
const { sendNotificationInputValidation } = require("./middleware");

router.post("/send",sendNotificationInputValidation, async (req, res) => {
    try {
        const response = await sendNotification(req, res);
        return res.status(200).send(response)
    } catch (error) {
        if (error.statusCode) return res.status(error.statusCode).send(error.message)
        return res.status(500).send("some thing went wrong")
    }
})

module.exports = router;