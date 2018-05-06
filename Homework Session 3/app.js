const express = require('express');
const path = require('path');
const fs = require('fs');
const request = require('request');
let app = express();






app.get('/:webclass', function(req, res, next){
  var webclass = req.params.webclass;
  var doTheJob = function(webclass, Post) {
    request('https://btvn-web12.herokuapp.com/api/' + webclass, function (error, response, body) {
      fs.writeFileSync('test.json', body);
      Post();
    });

  }
  var Post = function(){
    let obj;
    let string = "";
    fs.readFile('test.json', 'utf8', function (err, data) {
      if (err) throw err;
      obj = JSON.parse(data);
      for(i = 0; i < obj.data.length; i++){
        string += "<li>" + obj.data[i] + "</li>";
      }
      html = "<ul>" + string + "</ul>"
      res.send(html);
    });
  }
  doTheJob(webclass, Post);
});







// app.get('/web12', function(req, res){
//   let obj;
//   let string = "";
//   fs.readFile('test.json', 'utf8', function (err, data) {
//     if (err) throw err;
//     obj = JSON.parse(data);
//     for(i = 0; i < obj.data.length; i++){
//       string += "<li>" + obj.data[i] + "</li>";
//     }
//     html = "<ul>" + string + "</ul>"
//     res.send(html);
//   });
// });



app.use(express.static('static'));

app.get('/', function(req, res){
  res.sendFile(path.resolve('./static/index.html'));
});








app.listen(8000, function(err) {
  if(err) console.log(err);
  else console.log('Server is up!');
});
