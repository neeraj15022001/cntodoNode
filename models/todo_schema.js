const mongoose = require("mongoose");
// Schema for out todo list
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

// Mapping this schema corresponding to TODO collection
const TODO = mongoose.model("TODO", todoSchema);
//exporting instance of this schema
module.exports = TODO;