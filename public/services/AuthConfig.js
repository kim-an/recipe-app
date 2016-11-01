(function() {
  'use strict';

  angular
    .module('recipe-wars')
    .config(config);

  config.$inject = ['$httpProvider'];

  function config($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');
  }

})();
