(function() {

  angular
    .module('recipe-wars')
    .controller('RecipeController', RecipeController);

  RecipeController.$inject = ['$http', '$state', '$stateParams', 'UserService', 'RecipeService'];

  function RecipeController($http, $state, $stateParams, UserService, RecipeService) {
    var vm = this;
    vm.postRecipe = postRecipe;
    vm.errors = null;

    vm.newRecipe = {
      label: '',
      yield: 0,
      ingredientLines: [''],
      instructions: [''],
      image: '',
      rating: 0
    }

    RecipeService.getMyRecipes()
      .then(function(recipes) {
        vm.myRecipes = recipes;
        if ($stateParams.label) {
          vm.selectedRecipe = recipes.find(r => r.label === $stateParams.label);
        }
      });


    function postRecipe() {
      console.log("recipeController")
      RecipeService.postRecipe(vm.newRecipe)
        .then(newRecipe => {
          $state.go('welcome');
        });
    }

    vm.recipeDetails = function(recipe) {
      $state.go('myRecipeDetail', {label: recipe.label});
    }

    vm.deleteRecipe = function(recipe) {
      RecipeService.deleteRecipe(recipe)
        .then(function() {
          RecipeService.getMyRecipes()
            .then(function(recipes) {
              vm.myRecipes = recipes;
            });
        });
    }
  }

})();
