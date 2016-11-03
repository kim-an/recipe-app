(function() {

  angular
    .module('recipe-wars')
    .controller('RecipeController', RecipeController);

  RecipeController.$inject = ['$http', '$state', 'UserService', 'RecipeService'];

  function RecipeController($http, $state, UserService, RecipeService) {
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
      });


    function postRecipe() {
      console.log("recipeController")
      RecipeService.postRecipe(vm.newRecipe)
        .then(newRecipe => {
          $state.go('welcome');
        });
    }
  }

})();
