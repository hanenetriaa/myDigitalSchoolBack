/** @format */

const router = require("express").Router();
const userController = require("../controllers/UserControllers");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/getProfile", userController.getUserById);
router.post("/logout/:id", userController.logout);

module.exports = router;
