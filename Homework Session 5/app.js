const express = require('express');
const path = require('path');
const handlebars =  require('express-handlebars');
const bodyParser = require('body-parser');
const fs = require('fs');
const handlebarsHelpers = require('handlebars-helpers')({
  handlebars: express-handlebars
});

let app = express();
// Using body-parser libary
app.use(bodyParser.urlencoded({extended : false}));

// set up a new engine named handlebars from "handlebars({ defaultLayout: 'main'})"
app.engine('handlebars', handlebars({ defaultLayout: 'main'}));
// Set the 'view engine' of the app as the newly created "handlebars"
app.set('view engine', 'handlebars');

app.get('/home', function(req, res){
  res.render('home');
});


app.get('/show', function(req, res){
  //randInt function
  function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let questionList = fs.readFileSync('./questionList.json', 'utf-8');
  questionList = JSON.parse(questionList, 'utf-8');
  let randId = getRandomInt(0, questionList.length - 1);
  let question =  questionList.filter(question => question.id == randId)[0];
  res.render('showquestion', {
    question
  });
});

app.post('/api/vote/:questionId/:userVote', function(req, res){
  let userVote = req.params.userVote;
  let questionId = req.params.questionId;
  let questionList = fs.readFileSync('./questionList.json', 'utf-8');
  questionList = JSON.parse(questionList, 'utf-8');
  for(var i in questionList){
    try {
      if(questionList[i].id == questionId){
        userVote == "yes" ? questionList[i].yes += 1: questionList[i].no += 1;
      }
    } catch(err) {
      console.log('err');
    }
  }
  fs.writeFileSync('./questionList.json', JSON.stringify(questionList), 'utf-8');
  res.redirect(`/question/${questionId}`);
});



app.get('/ask', function(req, res){
  res.render('ask');
});

app.post('/api/question', function(req, res){

  let questionList = fs.readFileSync('./questionList.json', 'utf-8');
  questionList = JSON.parse(questionList, 'utf-8');
  console.log(questionList);
  let newQuestion = {
    id: questionList.length,
    questionContent: req.body.question,
    yes: 0,
    no: 0
  }
  console.log(newQuestion);
  questionList.push(newQuestion);

  fs.writeFileSync('./questionList.json', JSON.stringify(questionList), 'utf-8');
  res.redirect(`/question/${newQuestion.id}`);
});



app.get('/question/:newQuestionId', function(req, res){
  try {
    let questionList = fs.readFileSync('./questionList.json', 'utf-8');
    questionList = JSON.parse(questionList, 'utf-8');
    let question =  questionList.filter(question => question.id == req.params.newQuestionId)[0];
    let voteTotal = question.yes + question.no;
    let percentYes = (question.yes / (question.yes + question.no))*100;
    percentYes = percentYes.toFixed(0);
    let percentNo = 100 - percentYes;
    res.render('question', {
    question: question,
    voteTotal,
    percentYes,
    percentNo
    });
  } catch(err) {
    res.redirect(`/ask`);
  }
});










app.listen(8000, function(err) {
  if(err) console.log(err);
  else console.log('Server is up!');
});
