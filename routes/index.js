const express = require("express");
const router = express.Router();
const homeController = require("../controller/home_controller");
//Mapping endpoints to their respective controller functions
router.get("/", homeController.home);
router.post("/add", homeController.add)
router.get("/delete", homeController.delete)
//exporting this router
module.exports = router;