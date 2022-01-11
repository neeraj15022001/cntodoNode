const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    category: {
        type: String,
        required: false
    }
})

const TODO = mongoose.model("TODO", todoSchema);
module.exports = TODO;