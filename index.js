// importing express framework
const express = require("express")
// creating instance of express app
const app = express();
// defining PORT number
const PORT = 8000;
// configuring our mongodb
const db = require("./config/mongoose")
//setting view engine to ejs
app.set("view engine", "ejs");
// setting default views folder
app.set("views", "./views");
// requiring body parser for parsing form data
app.use(express.urlencoded());
// using router to route all from paths from '/'
app.use("/", require("./routes"))
app.use(express.static("./assets"))

// Making app listen for changes on PORT and running instance of express app
app.listen(PORT, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.info("Server is up and running on PORT: ", PORT);
})