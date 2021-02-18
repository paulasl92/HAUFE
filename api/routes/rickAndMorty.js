var express = require('express');
var {getCharacterById} = require('../controller/rickAndMorty');

const router = express.Router();

router.get("/characterById/:id", getCharacterById);
module.exports = router;