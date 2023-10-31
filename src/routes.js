const notificationRouter = require("./notification/controller");
const locationRouter = require("./location/controller");

const routes = (app) => {

    app.get("/health-check", (req, res) => {
        res.send("Health check completed...........")
    })

    app.use("/notification", notificationRouter)
    app.use("/location", locationRouter)
}

module.exports = routes