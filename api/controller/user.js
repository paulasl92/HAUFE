var UserServices = require('../services/user.js')
const signUp = async (req, res) => {
  try {
    const newUser = req.body;
    const savedUser = await UserServices.createUser(newUser);

    res.status(200).json({
      success: true,
      data: savedUser,
    });
  } catch (err) {
    res.status(200).json({
        success: false,
        error: err.toString()
      });
  }
};
 const signIn = async (req, res) => {
  try {
    const payload = req.body;
    const information = await UserServices.signInUser(payload);
    res.status(200).json({
      success: true,
      mail: information.email,
      token: information.token
    });
  } catch (err) {
    res.status(200).json({
        success: false,
        error: err.toString()
      });
  }
};

const updateCharacters = async (req, res) => {
  try{
    const email = req.body.email;
    const favorites = req.body.fav;
    const information = await UserServices.favUSerCharacters(email,{ fav : favorites});
    res.status(200).json({
      success: true,
      data: information.fav
    });
  } catch (err) {
    res.status(200).json({
        success: false,
        error: err.toString(),
      });
  }
};

const getFav = async (req, res) => {
  try{
    const email = req.body.email;
    const information = await UserServices.getUserCharacters(email);
    res.status(200).json({
      success: true,
      data: information
    });
  } catch (err) {
    res.status(200).json({
        success: false,
        error: err.toString(),
      });
  }
};


module.exports = { signUp, signIn, updateCharacters,getFav};