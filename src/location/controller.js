const express = require("express");
const { getNearestLocation } = require("./service");
const { getNearestLocationInputValidation } = require("./middleware");
const router = express.Router();

router.get("/nearest",getNearestLocationInputValidation, async (req, res) => {
    try {
        const response = await getNearestLocation(req, res);
        return res.status(200).send(response)
    } catch (error) {
        if (error.statusCode) return res.status(error.statusCode).send(error.message)
        return res.status(500).send("some thing went wrong")
    }
})

module.exports = router;