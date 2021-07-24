var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lab 2' });
});

router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/zeel', function(req, res, next) {
  res.render('zeel');
});

router.get('/mansi', function(req, res, next) {
  res.render('mansi');
});

router.get('/pankaj', function(req, res, next) {
  res.render('pankaj');
});  

router.get('/chandrika', function(req, res, next) {
    res.render('chandrika');  
});


module.exports = router;
