var express = require('express');
var {getCharacterById, getCharacters} = require('../controller/rickAndMorty');

const router = express.Router();

router.get("/characterById/:id", getCharacterById);
router.get("/characters/:id", getCharacters);
module.exports = router;