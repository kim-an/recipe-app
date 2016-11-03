(function() {

  angular
    .module('recipe-wars')
    .controller('RecipeController', RecipeController);

  RecipeController.$inject = ['$http', '$state', '$stateParams', 'UserService', 'RecipeService'];

  function RecipeController($http, $state, $stateParams, UserService, RecipeService) {
    var vm = this;
    vm.createRecipe = createRecipe;
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


    function createRecipe() {
      console.log("createRecipe...")
      RecipeService.postRecipe(vm.newRecipe)
        .then(newRecipe => {
          $state.go('welcome');
        });
    }

    vm.recipeDetails = function(recipe) {
      $state.go('myRecipeDetail', {label: recipe.label});
    }

    vm.update = function(recipe) {
      console.log('update recipe')
      RecipeService.updateRecipe(recipe)
        .then(function() {
          RecipeService.getMyRecipes()
          .then(myRecipe => {
            $state.go('myRecipeDetail')
          })
        })
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
