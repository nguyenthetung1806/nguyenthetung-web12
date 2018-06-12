const UserModel = require('../users/model');
const bcrypt = require('bcrypt');

const login = ( {username, password} ) => new Promise((resolve, reject) => {
    UserModel.findOne( { username })
    .then(userFound => {
      if (!userFound || !userFound.password) {
        reject({
          statusCode: 500,
          err: "incorrect username !!"
        });
      } else {
        bcrypt.compare(password, userFound.password)
          .then(comparedResult => {
            if(comparedResult) {
              console.log('true');
              resolve({ username: userFound.username, userId: userFound._id });
            } else {
              console.log('false');
              reject({
                statusCode: 401,
                err: "incorrect Password !!"
              });
            }
          })
      }
    })
    .catch(err => reject({
      statusCode: 500,
      err
    }));
});


const logout = () => req.session.destroy();

module.exports = {
  login,
  logout
}
