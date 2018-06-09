const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ImageApiouter = require('./modules/api/images/router')
mongoose.connect('mongodb://localhost/techkids', (err) =>{
  if(err) console.log(err);
  else console.log('DB connect success !!');
})

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/images', ImageApiouter);




const port = 8000;

app.listen(port, (err) =>{
  if(err) console.log(err);
  else console.log('Server is up !!');
})
