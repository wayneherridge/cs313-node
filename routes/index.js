var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', { title: 'Postal Rate Calculator' });
});

module.exports = router;
