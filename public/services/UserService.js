(function() {
  "use strict";

  angular
    .module("recipe-wars")
    .factory("UserService", UserService);

  UserService.$inject = ["$http", "AuthTokenService", "$window", "$log"];

  function UserService($http, AuthTokenService, $window, $log ) {
    var vm = this;

    var user = null;

    var service = {
      login: login,
      logout: logout,
      getUser: getUser,
      signup: signup
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
      if (user) return user;
      var token = AuthTokenService.getToken();
      if ( token ) {
        user = decode(token);
        return user;
      }
    }

    function decode(token) {
      return JSON.parse($window.atob(token.split('.')[1])).user;
    }

    function signup(newUser){
      return $http.post('/api/signup', newUser)
      .then((response) => {
        var token = response.data.token;
        AuthTokenService.setToken(token);
        user = decode(token);
        return user;
        console.log(user);
      });

    }
  }


})();
