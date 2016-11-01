(function() {
  "use strict";

  angular
    .module("recipe-wars")
    .config(AppRoutes);

  AppRoutes.$inject = ["$stateProvider", "$urlRouterProvider"];

  function AppRoutes($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("home", {
        url: "/",
        templateUrl: "../templates/home.html",
        // controller: "WelcomeController as vm"
      })
      .state("welcome", {
        url: "/welcome",
        resolve: {
          UserService: 'UserService',
          user: function(UserService) {
            return UserService.getUser();
          }
        },
        templateUrl: '../templates/welcome.html',
        controller: "WelcomeController as vm"
      })

      $urlRouterProvider.otherwise("/");
  }


})();
