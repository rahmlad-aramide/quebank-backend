const { signUp } = require("../controllers/admin.controller");

const router = require("express").Router();


router.post("/signup",signUp);

module.exports = router;