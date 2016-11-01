var express = require('express');
var router = express.Router();
var token = require('../config/token_auth')

router.post('/login', token.create);


module.exports = router;
