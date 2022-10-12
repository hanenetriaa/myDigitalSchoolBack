/** @format */

const router = require("express").Router();
const userController = require("../controllers/UserControllers");
const passport = require("passport");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.delete("/logout", passport.authenticate("jwt", { session: false }), userController.logout );


module.exports = router;
