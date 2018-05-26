const express = require('express');
const fs = require('fs');
const QuestionModel = require('../models/question.model');
const bodyParser = require('body-parser');


let Router = express.Router();


Router.use(bodyParser.urlencoded({extended : false}));


Router.post('/question', function(req, res){
  let newQuestion = {
    content: req.body.content,
  }
  QuestionModel.create(newQuestion, function(err, questionCreated){
    if(err) res.status(200).send( {success: 0, err: err} );
    res.send({success: 1, questionId: questionCreated._id});
  });
  QuestionModel.create(req.body)
});


Router.post('/vote/:questionId/:userVote', function(req, res){
  QuestionModel.findById(req.params.questionId, function (err, question) {
    if (err) return handleError(err);
    req.params.userVote == "yes" ? question.yes += 1: question.no += 1;
    question.save(function (err, updatedQuestion) {
      if (err) return handleError(err);
      res.redirect(`/question/${req.params.questionId}`);
    });
  });
});


Router.get('/changeQuestion', function(req, res){
  QuestionModel.find({ }, function(err, questions) {
    let randId = Math.floor(Math.random()*questions.length);
    let question =  questions[randId];
    res.send({success: 1, question: question});
  });
});


module.exports = Router;
