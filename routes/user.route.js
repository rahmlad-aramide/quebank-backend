const { userSignup, userSignin } = require("../controllers/user.controller");

const user = require("express").Router();

user.post("userSignup", userSignup);
user.post("userSignin", userSignin);

module.exports = user;