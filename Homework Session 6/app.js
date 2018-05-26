const express = require('express');
const path = require('path');
const handlebars =  require('express-handlebars');
const bodyParser = require('body-parser');
const fs = require('fs');
const handlebarsHelpers = require('handlebars-helpers')({ handlebars: express-handlebars });
const mongoose = require('mongoose');
// reqquire express.Router
const questionRouter = require('./router/questionRouter.js');
const apiRouter = require('./router/apiRouter.js');

const QuestionModel = require('./models/question.model');

//connect to MongoDB
mongoose.connect('mongodb://localhost/quyetde', (err) => {
  if(err) console.log(err);
  else console.log('BD connect success');
});


let app = express();
app.use(express.static('static'));
// Get express.Router
app.use('/question/', questionRouter);
app.use('/api/', apiRouter);
// Using body-parser libary
app.use(bodyParser.urlencoded({ extended : false }));
// set up a new engine named handlebars from "handlebars({ defaultLayout: 'main'})"
app.engine('handlebars', handlebars({ defaultLayout: 'main'}));
// Set the 'view engine' of the app as the newly created "handlebars"
app.set('view engine', 'handlebars');







app.get('/', function(req, res, next) {
  QuestionModel.find({ }, function(err, questions) {
    if(err) console.log(err);

    req.questionList = questions;
    if(req.questionList.length <= 0) res.render('home', { question: 'null'}); else next();
  });
}, function(req, res) {
  let randId = Math.floor(Math.random()*req.questionList.length);
  let question =  req.questionList[randId];
  res.render('index', {
    question
  });
});


app.get('/ask', function(req, res) {
  res.render('ask');
});







app.listen(8000, function(err) {
  if(err) console.log(err);
  else console.log('Server is up!');
});
