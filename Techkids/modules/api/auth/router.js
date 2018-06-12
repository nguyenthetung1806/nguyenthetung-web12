const express = require('express');
const Router = express.Router();
const AuthController = require('./controller');

Router.post('/', (req, res) => {
  AuthController.login(req.body)
  .then(UserInfo => {
    req.session.user = UserInfo;
    res.status(200).send({ sucesss: 1, user: UserInfo });
  })
  .catch(err => res.status(err.statusCode ? err.statusCode: 500).send({ sucess: 0, err: err.err }));
});

module.exports = Router;
