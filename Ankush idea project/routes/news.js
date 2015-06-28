var express = require('express');
var router = express.Router();
var nd = require('../newsdata.json');
/* GET news page. */
router.get('/', function(req, res, next) {
    res.render('news', { title: 'News',
        newsdata : nd
    });
});

module.exports = router;