(function() {
  'use strict';

  angular
    .module('recipe-wars')
    .controller('WelcomeController', WelcomeController);

  WelcomeController.$inject = ['UserService', '$stateParams', '$state', '$http', '$log', 'user', 'RecipeService'];

  function WelcomeController(UserService, $stateParams, $state, $http, $log, user, RecipeService) {
    var vm = this;
    vm.user = user;
    vm.allUsers = allUsers;
    vm.all = UserService.all;

    function allUsers() {
      console.log(user)
    }

    function logout() {
      UserService.logout();
      $state.go('index')
    }

      vm.search = function() {
        RecipeService.search(vm.searchText)
          .then(function(recipes) {
            vm.recipes = recipes;
          });
      }

      vm.showDetail = function(recipe) {
        $state.go('details', {recipe:recipe});
      };

      vm.postRecipe = function(){
        $state.go('postRecipe')
      }

  }


})();
