var express = require('express');
var router = express.Router();
var token = require('../config/token_auth');
var recipesController = require('../controllers/recipes');

router.post('/login', token.create);
router.post('/signup', token.signup);
router.get('/search', recipesController.search);

router.get('/recipes/:userId', recipesController.myRecipes);
router.post('/recipes', recipesController.create);



module.exports = router;
