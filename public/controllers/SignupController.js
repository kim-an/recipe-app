(function() {
  "use strict";

  angular
    .module('recipe-wars')
    .controller('SignupController', SignupController);

  SignupController.$inject = ['UserService', '$state'];

  function SignupController(UserService, $state) {
    var vm = this;
    vm.signup = signup;
    vm.errors = null;

    vm.newUser = {
      username: '',
      email: '',
      password: ''
    }

    function signup() {
      UserService.signup(vm.newUser)
      .then((user) => {
        $state.go('welcome');
      })
      .catch((response) => {
        vm.newUser.username = '';
        vm.newUser.email = '';
        vm.newUser.password = '';
        vm.errors = response.data;
      });
    }
  }

})();
