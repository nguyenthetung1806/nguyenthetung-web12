const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const handlebars =  require('express-handlebars');
const handlebarsHelpers = require('handlebars-helpers')({ handlebars: express-handlebars });
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


app.get('/api/add/:id/:playerid/:round/:value', function(req, res){
  GameModel.findById(req.params.id, function (err, game) {
    console.log('get');
    game.Player.forEach(function(data){
      if(data._id == req.params.playerid){
        data.roundScore.splice((req.params.round - 1),1 , req.params.value);
        console.log(data);
      }
    });
    game.save(function (err, updatedGame) {
      console.log('save');
    });
  });
});


app.get('/api/addround/:id/all/:round', function(req, res){
  GameModel.findById(req.params.id, function (err, game) {
    game.noRound += 1;
    game.Player.forEach(function(data){
      data.roundScore.push("");
      console.log(data);
      game.save(function (err, updatedGame) {
      });
    });
  });
});




app.get('/', function(req, res) {
  res.render('CreateScreen')}
);


app.get('/PlayerScreen/:id', function(req, res) {
  console.log(req.params.id);
  if(req.params.id.indexOf('.') == -1){

    GameModel.findById(req.params.id, function (err, game) {
      console.log(game);
      console.log('game success');
      let table = [];
      for (let i = 0; i < (game.noRound) ; i++) {
        let row = [];
        game.Player.forEach(function(data){
          row.push(data.roundScore[i])
        });
        table.push(row);
      }
      console.log(table)
      res.render('PlayerScreen', {game: game, table: table});
      console.log('ok');
    });
  }
});





app.listen(1811, function(err){
  if(err) console.log(err);
  else console.log('Server is up !!');
});
