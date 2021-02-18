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

module.exports = { getCharacterById };