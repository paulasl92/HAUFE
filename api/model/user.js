var mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  fav: {
    type: []
  }
});

module.exports = mongoose.model("User", userSchema);