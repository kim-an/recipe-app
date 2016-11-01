(function() {
  'use strict';

  angular
    .module('recipe-wars')
    .controller('DetailsController', DetailsController);

  DetailsController.$inject = ['UserService', '$stateParams', '$state', 'RecipeService'];

  function DetailsController(UserService, $stateParams, $state, RecipeService) {
    var vm = this;

    vm.recipe = RecipeService.getRecipe($stateParams.recipe);

  }


})();
