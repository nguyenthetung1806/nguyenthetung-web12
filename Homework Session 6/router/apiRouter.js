const express = require('express');
const fs = require('fs');
const QuestionModel = require('../models/question.model');
const bodyParser = require('body-parser');


let Router = express.Router();


Router.use(bodyParser.urlencoded({extended : false}));


Router.post('/question', function(req, res){
  let newQuestion = {
    content: req.body.questionContent,
  }
  QuestionModel.create(newQuestion, function(err, questionCreated){
    if(err) console.log(err);
    else res.redirect(`/question/${questionCreated._id}`);
  });
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



module.exports = Router;
