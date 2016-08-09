var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js')


/* GET home page. */
router.get('/pirates', function(req, res, next) {
  knex('pirates').then(function(data){
    console.log(data);
    // var response = JSON.stringify(data)
    var response = data
    res.send(response)
  })
});

module.exports = router;
