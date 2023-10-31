const firebaseAdmin = require("../utils/config/firebase")


const sendNotification = async (req, res) => {
    try {
        const inputData = req.body;

        const data = {
            token: inputData.token,
            notification: {
                title: inputData.title,
                body: inputData.body
            },
            data: {}
        }
        if (inputData.payload) data.data = inputData.payload;

        await firebaseAdmin.messaging().send(data)

        return "notification send successfully";
    } catch (error) {
        throw ({ statusCode: 400, message: error });
    }
}

module.exports = {
    sendNotification
}