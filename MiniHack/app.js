const express = require('express');
const expressHandlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const handlebars =  require('express-handlebars');
const mongoose = require('mongoose');
const GameModel = require('./models/game.model');


let app = express();

app.use(express.static('static'));

app.use(cookieParser());

app.use(bodyParser.urlencoded({extended : false}));

app.engine('handlebars', handlebars({ defaultLayout: 'main'}));
// Set the 'view engine' of the app as the newly created "handlebars"
app.set('view engine', 'handlebars');


mongoose.connect('mongodb://localhost/miniHack', (err) => {
  if(err) console.log(err);
  else console.log('BD connect success');
});


app.post('/api/createQuestion', function(req, res){
  let player = {
      Player : []
  };
  for(var key in req.body) {
      let playerChild = {
        playerName : req.body[key],
        roundScore :[]
      }
      player.Player.push(playerChild);
  }

  GameModel.create(player, function(err, gameCreated){
    if(err) res.status(200).send( {success: 0, err: err} );
    // res.send({success: 1, gameId: gameCreated._id, player: gameCreated.Player});
    res.redirect('/PlayerScreen/' + gameCreated._id);
  });
  GameModel.create(req.body);
});


app.get('/', function(req, res) {
  res.render('CreateScreen')}
);


  app.get('/PlayerScreen/:id', function(req, res) {
    GameModel.findById(req.params.id, function (err, game) {
      if (err) return handleError(err);
      res.render('PlayerScreen', {game: game});
    });
  });



app.listen(1811, function(err){
  if(err) console.log(err);
  else console.log('Server is up !!');
})
