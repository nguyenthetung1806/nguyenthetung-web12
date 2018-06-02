const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var childSchema = new Schema({
   playerName: { type: String},
   roundScore:  { type: Array},
});

const GameSchema = new mongoose.Schema({
  Player: [childSchema],
});


module.exports = mongoose.model("Game", GameSchema);
