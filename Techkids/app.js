const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');

const ImageApiouter = require('./modules/api/images/router')
const UserApiouter = require('./modules/api/users/router')
const AuthApiouter = require('./modules/api/auth/router')
mongoose.connect('mongodb://localhost/techkids', (err) =>{
  if(err) console.log(err);
  else console.log('DB connect success !!');
})


let app = express();

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    maxAge: 24 * 60 * 60 * 1000
  }
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/images', ImageApiouter);
app.use('/api/users', UserApiouter);
app.use('/api/auth', AuthApiouter);

app.get("/", (req, res) => {
  console.log(Session.ID);
  res.send('sđâsd')
});

const port = 8000;

app.listen(port, (err) =>{
  if(err) console.log(err);
  else console.log('Server is up !!');
})
