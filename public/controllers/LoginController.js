(function() {
  "use strict";

  angular
    .module('recipe-wars')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['UserService', '$state', '$log'];

  function LoginController(UserService, $state, $log) {
    var vm = this;
    vm.login = login;
    vm.errors = null;
    vm.getUser = function() {
      return UserService.getUser();
    };

    function login() {
      UserService.login(vm.username, vm.password)
        .then((user) => {

console.log('user', user)

          $state.go('welcome')
        })
        .catch((response) => {
          vm.password = '';
          vm.username = '';
          vm.errors = response.data;
        });
    }
  }

})();
