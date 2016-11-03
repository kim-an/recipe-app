var request = require('request');
var Recipe = require('../models/recipe');

var appId = process.env.APPLICATION_ID;
var appKey = process.env.APPLICATION_KEY;
var recipeBaseUrl = `https://api.edamam.com/search?app_id=${appId}&app_key=${appKey}&q=`;

function search(req, res, next) {
  var url = recipeBaseUrl + req.query.search;
  request(url, function(err, resp, body) {
    var data = JSON.parse(body).hits;
    data = data.map(hit => hit.recipe);
    res.json(data);
  });
}

function index(req, res) {
  Recipe.find({}, function(err, recipes) {
    res.json(recipes);
  })
}

function create(req, res) {
  Recipe.create(req.body)
    .then(function(recipe) {
      res.json(recipe);
    })
    .catch(function(err) {
      res.status(400).json(err);
    });
}

function myRecipes(req, res) {
  Recipe.find({user: req.params.userId})
    .then(function(recipes) {
      res.json(recipes);
    })
    .catch(function(err) {
      res.status(400).json(err);
    });
}

function deleteRecipe(req, res) {
  Recipe.findByIdAndRemove(req.params.id)
    .then(function(recipe) {
      res.status(204).json({msg: 'deleted recipe'});
    })
    .catch(function(err) {
      res.status(400).json(err);
    });
}

function updateRecipe(req, res) {
  var id = req.params.id;
  Recipe.findOneAndUpdate({_id: id}, req.body, {new: true}, function(err, recipe){
    if (err) return next(error);
    return res.json(recipe);
  });
}

module.exports = {
  index: index,
  search: search,
  create: create,
  myRecipes: myRecipes,
  delete: deleteRecipe,
  update: updateRecipe
};
