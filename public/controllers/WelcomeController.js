(function() {
  'use strict';

  angular
    .module('recipe-wars')
    .controller('WelcomeController', WelcomeController);

  WelcomeController.$inject = ['UserService', '$stateParams', '$state', '$http', '$log', 'user'];

  function WelcomeController(UserService, $stateParams, $state, $http, $log, user) {
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
  }


})();
