(function() {
  "use strict";

  angular
    .module("recipe-wars")
    .config(AppRoutes);

  AppRoutes.$inject = ["$stateProvider", "$urlRouterProvider"];

  function AppRoutes($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("homePage", {
        url: "/",
        templateUrl: "/views/home.html",
        controller: "MainController"
      })

      $urlRouterProvider.otherwise("/");
  }


})();
