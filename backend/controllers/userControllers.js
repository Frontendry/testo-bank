/** Simplifies Error Handling */
const asyncHandler = require("express-async-handler");

/** Import User model */
const User = require("../models/userModel");

/** JWT */
const generateToken = require("../utils/generateToken");

const registerUser = asyncHandler(async (req, res) => {
  const { firstname, lastname, telPrefix, tel, email, password } = req.body;

  const userExists = await User.findOne({ email });

  // If user (email) exists throw errror
  if (userExists) {
    res.status(400);
    throw new Error("User Already Exists");
  }

  const user = await User.create({
    firstname,
    lastname,
    telPrefix,
    tel,
    email,
    password,
  });

  // If successfully created on DB
  if (user) {
    res.status(201).json({
      _id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      telPrefix: user.telPrefix,
      tel: user.tel,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Error occured!");
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Find user via unique email
  const user = await User.findOne({ email });

  // If user/unique email exists and password is correct
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      telPrefix: user.telPrefix,
      tel: user.tel,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid email or password!");
  }
});

module.exports = { registerUser, authUser };
