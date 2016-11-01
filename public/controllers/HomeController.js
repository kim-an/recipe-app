(function() {
  'use strict';

  angular
    .module("recipe-wars")
    .controller("HomeController", HomeController);

  HomeController.$inject = ['$http', '$state', 'RecipeService'];

  function HomeController($http, $state, RecipeService) {
    var vm = this;

    vm.search = function() {
      RecipeService.search(vm.searchText)
        .then(function(recipies) {
          vm.recipies = recipies;
        });
    }

    vm.showDetail = function(recipe) {
      $state.go('details', {recipe:recipe});
    };

  }


})();
