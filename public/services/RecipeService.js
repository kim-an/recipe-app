(function() {
  "use strict";

  angular
    .module("recipe-wars")
    .factory("RecipeService", RecipeService);

  RecipeService.$inject = ["$http", "$window", "UserService"]

  function RecipeService($http, $window, UserService) {

    var searchRecipes = null;

    var service = {
      search: search,
      getRecipe: getRecipe,
      postRecipe: postRecipe,
      getMyRecipes: getMyRecipes,
      deleteRecipe: deleteRecipe,
      updateRecipe: updateRecipe
    };

    return service;

    function search(searchText) {
      $window.localStorage.setItem('searchText', searchText);
      return $http.get("/api/search?search=" + searchText)
        .then(function(res) {
          console.log(res.data);
          searchRecipes = res.data;
          return res.data;
        });
    }

    function getRecipe(label) {
      return searchRecipes.find(r => r.label === label);
    }

    function postRecipe(newRecipe){
      console.log('postRecipe')
      newRecipe.user = UserService.getUser()._id;
      return $http.post('/api/recipes', newRecipe)
        .then((response) => {
          return response.data;
        });
    }

    function getMyRecipes() {
      return $http.get('/api/recipes/' + UserService.getUser()._id)
        .then(function(resp) {
          return resp.data;
        });
    }

    function deleteRecipe(recipe) {
      return $http.delete('/api/recipes/' + recipe._id);
    }

    function updateRecipe(recipe) {
      return $http.put('/api/recipes/' + recipe._id, recipe);
    }

  }

})();
