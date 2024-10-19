const { signUp, signIn, createFile } = require("../controllers/admin.controller");

const router = require("express").Router();


router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/createFile", createFile);

module.exports = router;