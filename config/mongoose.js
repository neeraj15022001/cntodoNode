const mongoose = require("mongoose");
main()
    .then(() => console.info("Connected successfully to DB"))
    .catch(err => console.error("Error while connecting to db ", err));

async function main() {
    await mongoose.connect("mongodb://localhost:27017/todo_db");
}

module.exports = mongoose.connection;