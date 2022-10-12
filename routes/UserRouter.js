const router = require("express").Router();

const userController = require("../controllers/UserControllers");

router.post ("/register", userController.register)

module.exports = router;