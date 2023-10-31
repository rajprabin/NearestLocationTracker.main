const firebaseAdmin = require("../utils/config/firebase")


const sendNotification = async (req, res) => {
    const inputData = req.body;

    const data = {
        tokens: inputData.token,
        notification: {
            title: inputData.title,
            body: inputData
        },
        data: {}
    }

    if (inputData.payload) data.data = JSON.stringify(inputData.payload);

    firebaseAdmin.messaging()
        .send(data)
        .then((value) => {
            console.log("sendNotification", value)
        })
        .catch((err) => {
            throw ({ statusCode: 400, message: err })
        })

    return "notification send successfully";
}

module.exports = {
    sendNotification
}