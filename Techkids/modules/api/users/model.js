const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const Schema  = mongoose.Schema;

const UserModel = new Schema ({
  username: { type: String, required: true
     // ,unique: true
   },
  password: { type: String, required: true },
  name: { type: String },
  email: { type: String
    // ,unique: true
  },
  avatar: { type: String },
  active: { type: Boolean, default: true },
});

// Check néu thay đổi password thì mới hash lại
UserModel.pre("save", function(next) {
  if(this.passwordChange || this.__v === undefined) {
    const saltRounds = 10;
    const plainPassword = this.passwordChange || this.password;

    bcrypt.compare(plainPassword, this.password)
      .then(comparedResult => {
        if(comparedResult) {
          console.log(comparedResult);
          next();
        } else {
          console.log(comparedResult);
          bcrypt.genSalt(saltRounds)
              .then(salt => bcrypt.hash(plainPassword, salt))
              .then(hashPassword => {
                this.password = hashPassword;
                next();
              })
              .catch(err => next(err));
        }
      })
      .catch(err => next(err));
    } else next();
});

module.exports = mongoose.model("User", UserModel);
