var express = require('express');
var router = express.Router();
var nd = require('../newsdata.json');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'news Items',
    newsdata : nd
  });
});

module.exports = router;
