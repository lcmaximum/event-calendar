var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('events/index', { title: 'Your Event Calendar' });
});

module.exports = router;
