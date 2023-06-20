var express = require('express');
var router = express.Router();
var axios = require('axios')
var env = require('../config/env')


/* GET home page. */
router.get('/', function(req, res, next) {
  var data = new Date().toISOString().substring(0,19)
  axios.get(env.apiAccessPoint)
    .then(response => {
      res.render('index', {clist: response.data, d: data})
    })
    .catch(erro => {
      res.render('error', {error: erro})
    })
});
module.exports = router;


router.get('/:id', function(req, res, next) {
  var data = new Date().toISOString().substring(0,19)
  axios.get(env.apiAccessPoint+'/'+req.params.id)
    .then(response => {
      res.render('consulta', {c: response.data, d: data})
    })
    .catch(erro => {
      res.render('error', {error: erro})
    })
});


router.get('/intervencoes/:id', function(req, res, next) {
  var data = new Date().toISOString().substring(0,19)
  axios.get(env.apiAccessPoint+'/interv/'+req.params.id)
    .then(response => {
      res.render('intervencao', {i: response.data, d: data})
    })
    .catch(erro => {
      res.render('error', {error: erro})
    })
});