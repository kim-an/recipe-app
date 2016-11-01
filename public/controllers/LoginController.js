(function() {
  "use strict";

  angular
    .module('recipe-wars')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['UserService', '$state', '$log'];

  function LoginController(UserService, $state, $log) {
    var vm = this;
    vm.login = login;
    vm.logout = logout;
    vm.errors = null;
    vm.signup = signup;
    vm.getUser = function() {
      return UserService.getUser();
    };

    function login() {
      UserService.login(vm.username, vm.password)
        .then((user) => {
          $state.go('welcome')
        })
        .catch((response) => {
          vm.password = '';
          vm.username = '';
          vm.errors = response.data;
        });
    }

    function logout() {
      UserService.logout();
      $state.go('home')
    }

    function signup() {
      $state.go('signup');
    }
  }


})();
