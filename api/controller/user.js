var UserServices = require('../services/user.js')
const signUp = async (req, res, next) => {
  try {
    const newUser = req.body;
    const savedUser = await UserServices.createUser(newUser);

    res.status(200).json({
      success: true,
      data: savedUser,
    });
  } catch (err) {
    res.status(409).json({
        success: false,
        error: err.toString()
      });
  }
};
 const signIn = async (req, res, next) => {
  try {
    const payload = req.body;
    const token = await UserServices.signInUser(payload);
    res.status(200).json({
      success: true,
      token: token,
    });
  } catch (err) {
    res.status(409).json({
        success: false,
        error: err.toString()
      });
  }
};

module.exports = { signUp, signIn};