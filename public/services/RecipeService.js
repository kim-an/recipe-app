(function() {
  "use strict";

  angular
    .module("recipe-wars")
    .factory("RecipeService", RecipeService);

  RecipeService.$inject = ["$http"]

  function RecipeService($http) {

    var searchRecipies = null;

    var service = {
      search: search,
      getRecipe: getRecipe
    };

    return service;

    function search(searchText) {
      return $http.get("/api/search?search=" + searchText)
        .then(function(res) {
          console.log(res.data);
          searchRecipies = res.data;
          return res.data;
        });
    }

    function getRecipe(recipe) {
      return searchRecipies.find(r => r.$$hashKey === recipe);
    }

  }

})();
