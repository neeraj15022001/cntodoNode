const express = require("express");
const router = express.Router();
const homeController = require("../controller/home_controller");
router.get("/", homeController.home);
router.post("/add", homeController.add)
router.get("/delete", homeController.delete)
module.exports = router;