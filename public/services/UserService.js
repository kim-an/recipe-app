(function() {
  "use strict";

  angular
    .module("recipe-wars")
    .factory("userService", userService);

  userService.$inject = ["$http"];

  function userService($http) {
    var vm = this;
  }


})();
