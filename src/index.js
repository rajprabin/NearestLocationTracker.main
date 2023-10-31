const express = require("express");
const routes = require("./routes");

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

routes(app);

app.use("/*", (req, res) => {
    res.status(404).send({ error: "There is no use case to process the request" })
})

app.listen(3000, () => console.log("Server is listening on port 3000"))