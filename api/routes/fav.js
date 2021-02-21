var express = require('express');
var {updateCharacters, getFav} = require('../controller/user');

const router = express.Router();

router.post("/updateCharacters", updateCharacters)
router.post("/getUserFav", getFav)
module.exports = router;


