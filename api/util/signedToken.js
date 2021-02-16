var jwt = require('jsonwebtoken')
var key = require('../keys')

const getSignedToken = function (id) {
  return jwt.sign({ _id: id }, key.JWT_SECRET, { expiresIn: "1hr" });
};

module.exports = getSignedToken;