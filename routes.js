var User = require('./models/user');

  module.exports = function(app) {

    app.get('/api/users', function(req, res) {
      User.find(function(err, users) {
        if (err)
          res.send(err);
        res.json(users);  //return all users in JSON format
      })
    })



  }
