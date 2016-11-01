(function() {
  'use strict';

  angular
    .module("recipe-wars")
    .controller("HomeController", HomeController);

  HomeController.$inject = ['$http'];

  function HomeController($http) {
    var vm = this;

    vm.search = function() {
      $http.get("/api/search?search=" + vm.searchText)
        .then(function(res) {
          console.log(res.data);
          vm.recipies = res.data;
        });
    }


  }


})();
