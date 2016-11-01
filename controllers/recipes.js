var request = require('request');

var appId = process.env.APPLICATION_ID;
var appKey = process.env.APPLICATION_KEY;
var recipeBaseUrl = `https://api.edamam.com/search?app_id=${appId}&app_key=${appKey}&q=`;

function search(req, res, next) {
  var url = recipeBaseUrl + req.query.search;
  request(url, function(err, resp, body) {
    var data = JSON.parse(body).hits;
    data = data.map(hit => hit.recipe);
    res.json(data);
  });
}

module.exports = {
  search: search
};
