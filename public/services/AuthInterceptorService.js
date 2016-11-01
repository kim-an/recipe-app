(function() {
  'use strict';

  angular
    .module('recipe-wars')
    .factory('AuthInterceptor', AuthInterceptor);

   AuthInterceptor.$inject = ['AuthTokenService'];

   function AuthInterceptor(AuthTokenService) {
      return {
        request: addToken
      }

      function addToken(config) {
        var token = AuthTokenService.getToken();
        if (token) {
          config.headers = config.headers || {};
          config.headers.Authroization = `Bearer ${token}`;
        }
      return config;
      }
   }

})();
