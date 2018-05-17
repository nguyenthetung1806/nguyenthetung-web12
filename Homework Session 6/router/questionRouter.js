const express = require('express');
const fs = require('fs');
const QuestionModel = require('../models/question.model');

let Router = express.Router();


Router.get('/:newQuestionId', function(req, res){
  QuestionModel.findById(req.params.newQuestionId, function (err, question) {
    if(err) console.log(err);
    let voteTotal = question.yes + question.no;
    let percentYes = (question.yes / (question.yes + question.no))*100;
    percentYes = percentYes.toFixed(0);
    let percentNo = 100 - percentYes;
    res.render('question', { question: question, voteTotal, percentYes, percentNo });
  });
});

module.exports = Router;
