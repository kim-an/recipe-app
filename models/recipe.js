var mongoose = require('mongoose');

var recipeSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true
  },
  yield: number,
  ingredientLines:{
    []
  },
  instructions: {
    type: String
  },
  image: String
});

module.exports = mongoose.model('Recipe', recipeSchema)
