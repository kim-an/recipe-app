(function() {
  "use strict";

  angular
    .module('recipe-wars')
    .controller('SignupController', SignupController);

  SignupController.$inject = ['UserService', '$state'];

  function SignupController(UserService, $state) {
    var vm = this;
    vm.signup = signup;

    function signup() {

    }
  }

})();
