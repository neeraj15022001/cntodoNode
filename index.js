const express = require("express")
const app = express();
const PORT = 8000;
const db = require("./config/mongoose")
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded());
app.use("/", require("./routes"))
app.use(express.static("./assets"))
app.listen(PORT, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.info("Server is up and running on PORT: ", PORT);
})