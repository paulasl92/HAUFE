var bcrypt = require('bcryptjs');
var User = require('../model/user');
var getSignedToken = require('../util/signedToken');

async function createUser(payload) {
  return User.find({ email: payload.email })
    .exec()
    .then((user ) => {
      if (user.length > 0) {
        throw new Error("User already exist");
      }
      return bcrypt
        .hash(payload.password, 10)
        .then((hashed) => {
          const newUser = new User({
            email: payload.email,
            password: hashed,
          });
          return newUser.save();
        })
        .catch((err) => {
          throw new Error("All field required");
        });
    });
}

function signInUser(payload) {
  return User.findOne({ email: payload.email })
    .exec()
    .then((user) => {
      if (!user) {
        throw new Error("The email does not exists");
      } else {
        return bcrypt
          .compare(payload.password, user.password)
          .then((res) => {
            if (res) {
              const information = {
                token:  getSignedToken(user._id),
                email: payload.email
              } 
              return information;
            } else {
              throw new Error("Incorrect password or email, try again");
            }
          })
          .catch((err) => {
            throw new Error("Incorrect password or email, try again");
          });
      }
    });
}

function favUSerCharacters(email,body) {
  return User.findOne({ email: email }).exec()
  .then((user)  => {
    if (!user) {
      throw new Error("The email does not exists");
    } else {
     return User.findByIdAndUpdate( user._id,body, { new: true } , (error,info) => {  
      if(error){
        throw new Error("Cant not update");
      } else { 
        return {
          fav: info.fav
        }
      }
    })
    };
  });
}

function getUserCharacters(email) {
  return User.findOne({ email: email }).exec()
  .then((user)  => {
    if (!user) {
      throw new Error("The email does not exists");
    } else {
     return user.fav
    }
  });
}


module.exports = { createUser, signInUser, favUSerCharacters,getUserCharacters };