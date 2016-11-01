(function() {
  "use strict";

  angular
    .module("recipe-wars")
    .factory("UserService", UserService);

  UserService.$inject = ["$http", "AuthTokenService", "$window", "$log"];

  function UserService($http, AuthTokenService, $window, $log ) {
    var vm = this;

    var baseUrl = 'http://localhost:3000';
    var user = null;

    var service = {
      login: login,
      logout: logout,
      getUser: getUser
    }

    return service;

    function login(username, password) {
      return $http.post('/api/login', {username, password})
        .then((response) => {
          var token = response.data.token;
          AuthTokenService.setToken(token);
          user = decode(token);
          return user;
        });
    }

    function all() {
      return usernames;
    }

    function logout() {
      user = null;
      AuthTokenService.removeToken();
    }

    function getUser() {
      return user;
    }

    function decode(token) {
      return JSON.parse($window.atob(token.split('.')[1])).user;
    }
  }


})();
