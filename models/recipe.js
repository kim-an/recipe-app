var mongoose = require('mongoose');

var recipeSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true
  },
  yield: Number,
  ingredientLines: [],
  instructions: [],
  image: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  rating: Number
});

module.exports = mongoose.model('Recipe', recipeSchema)
