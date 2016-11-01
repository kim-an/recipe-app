var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// mongoose.connect(url);
mongoose.connect(process.env.DATABASE_URL);

// database connection event
mongoose.connection.once('open', function() {
  console.log(`Mongoose connected to: ${mongoose.connection.host}:${mongoose.connection.port}`)
})

module.exports = mongoose;

