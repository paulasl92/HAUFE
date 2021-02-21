var jwt = require('jsonwebtoken')

const getSignedToken = function (id) {
  return jwt.sign({ _id: id }, JWT_SECRET, { expiresIn: "1hr" });
};

module.exports = getSignedToken;