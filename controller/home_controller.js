const TODO = require("../models/todo_schema")
module.exports.home = (req, res) => {
    TODO.find({}, function (err, data) {
        if (err) {
            console.error("Error while getting data from db : ", err);
            return;
        }
        return res.render("home", {title: "TODO App", data: data});
    })
}

module.exports.add = (req, res) => {
    console.log(req.body)
    TODO.create({...req.body}, function (err) {
        if (err) {
            console.error("Error while creating document in db : ", err);
            return;
        }
        return res.redirect("back");
    })
}
module.exports.delete = (req, res) => {
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