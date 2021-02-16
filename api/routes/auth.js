var express = require('express');
var {signUp, signIn} = require('../controller/user');

const router = express.Router();

router.post("/signUp", signUp);
router.post("/signIn", signIn);
module.exports = router;