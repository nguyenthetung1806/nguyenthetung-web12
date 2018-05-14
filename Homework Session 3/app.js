const express = require('express');
const path = require('path');
const fs = require('fs');
const request = require('request');
let app = express();

app.use(express.static('static'));


app.get('/:webclass', function(req, res){
  if(req.params.webclass.indexOf('.') == -1){
    url = 'https://btvn-web12.herokuapp.com/api/' + req.params.webclass;
    getAndWrite(url, function(){
      let obj;
      let string = "";
      let html = "";
      fs.readFile('test.json', 'utf8', function (err, data) {
        if (err) throw err;
        obj = JSON.parse(data);
        obj.data.forEach((item) => {
          string +=`<li>${item}</li>`
        });
        html = `<ul>${string}</ul>`;
        res.send(html);
      });
    });
  }


  function getAndWrite(url, Post){
    request(url, function (error, response, body) {
      console.log('url:', url);
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body);

      fs.writeFileSync('test.json', body);
      Post();
    });
  }


});


// for(i = 0; i < obj.data.length; i++){
//   string += `<li>${obj.data[i]}</li>`
// }

// try, if error, do something
// try {
//
// } catch(error) {}

// obj.data.map(item, index) =>{
//
// });

// joint, plit array
// obj.split(' ');
// obj.joint(' ');


// filter element that satisfy some conditions
// arr.filter((item) => {
//   return item === 5;
// });




// if else command in ES6
// condition ? true : false;




// app.use(express.static('static')); automatically use index.html as the front page
app.get('/', function(req, res){
  res.sendFile(path.resolve('./static/index.html'));
});



app.listen(8000, function(err) {
  if(err) console.log(err);
  else console.log('Server is up!');
});
