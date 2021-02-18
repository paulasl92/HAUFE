var RandMServices = require('../services/axios.js')

//https://rickandmortyapi.com/documentation/#rest

/**
 * You can access the list of characters by using the /character endpoint.
 */
const getCharacterById = async (req, res) => {
  try {
    const id = req.params.id;
    const character = await RandMServices.getRequestById(id, "/character/");
    res.status(200).json({
      success: true,
      data: character.data,
    });
  } catch (err) {
    res.status(406).json({
        success: false,
        error: err.toString()
      });
  }
};

/**
 * You can access different pages with the page parameter. If you don't specify any page, the first page will be shown.
 */
const getCharacters = async (req, res) => {
  const page = req.params.id;
  try {
    const characters  = await RandMServices.getRequestById(page, "/character/?page=");
    res.status(200).json({
      success: true,
      data: characters.data,
    });
  } catch (err) {
    res.status(406).json({
        success: false,
        error: err.toString()
      });
  }
};


module.exports = { getCharacterById, getCharacters };