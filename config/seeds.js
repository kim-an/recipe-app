require('dotenv').config();
var mongoose = require('./database');

var User = require ('../models/user');

var users = [
{username: 'admin', password: 'admin', email: 'admin@email.com'}
];

User
  .remove({})
  .then(() => {
    console.log('Emptying and seeding database...');
    return User.create(users);
  })
  .then((users) => {
    console.log(`Seeded ${users.length} users`)
    return mongoose.connection.close();
  })
  .then(() => {
    process.exit()
  })
