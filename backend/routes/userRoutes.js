const express = require("express");
const { registerUser, authUser } = require("../controllers/userControllers");

// Create new router object
const router = express.Router();

// Route for user registration
router.route("/").post(registerUser);

// Route for user login
router.route("/login").post(authUser);

module.exports = router;
