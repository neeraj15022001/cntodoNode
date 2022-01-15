// using instance of schema to perform further queries
const TODO = require("../models/todo_schema")
// controller function when home page is hit
module.exports.home = (req, res) => {
    TODO.find({}, function (err, data) {
        if (err) {
            console.error("Error while getting data from db : ", err);
            return;
        }
        return res.render("home", {title: "TODO App", data: data});
    })
}

// controller function when item is added to todo
module.exports.add = (req, res) => {
    // Receiving data from form
    console.log(req.body)
    TODO.create({...req.body}, function (err) {
        if (err) {
            console.error("Error while creating document in db : ", err);
            return;
        }
        return res.redirect("back");
    })
}

// Controller when item is deleted
module.exports.delete = (req, res) => {
    //Receiving id's of items to delete
    const items = JSON.parse(req.query.items)
    items.forEach(item => {
        TODO.findByIdAndDelete(item, (err) => {
            if (err) {
                console.error("Error while deleting doc: ", err);
                return;
            }
        })
    })
    return res.sendStatus(200)
}