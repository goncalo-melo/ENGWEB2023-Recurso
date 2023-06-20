var express = require('express');
var router = express.Router();
var Consulta = require('../controllers/consulta')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get('/consultas', function(req, res, next) {
  if(req.query && req.query.idade){
    Consulta.getConsultasIdade(req.query.idade)
      .then(dados => {
        res.status(200).json(dados)
      })
      .catch(erro => {
        res.status(521).json({erro: erro, mensagem: "Erro na obtenção da lista de consultas realizadas em pessoas com a idade superior."})
      })
  }
  else if(req.query && req.query.sexo){
    Consulta.getConsultasSexo(req.query.sexo)
      .then(dados => {
        res.status(200).json(dados)
      })
      .catch(erro => {
        res.status(521).json({erro: erro, mensagem: "Erro na obtenção da lista de consultas em pessoas com o sexo."})
      })
  }
  else{
    Consulta.list()
      .then(dados => {
        res.status(200).json(dados)
      })
      .catch(erro => {
        res.status(521).json({erro: erro, mensagem: "Erro na obtenção da lista de consultas."})
      })
  }
});


router.get('/consultas/:id', function(req, res, next) {
  Consulta.getConsulta(req.params.id)
    .then(dados => {
      res.status(200).json(dados)
    })
    .catch(erro => {
      res.status(521).json({erro: erro, mensagem: "Erro na obtenção da consulta"})
    })
});


router.get('/consultas/nomes', function(req, res, next) {
  Consulta.getConsultasNomes()
    .then(dados => {
      res.status(200).json(dados)
    })
    .catch(erro => {
      res.status(521).json({erro: erro, mensagem: "Erro na obtenção da lista de nomes"})
    })
});

router.get('/consultas/interv', function(req, res, next) {
  Consulta.getConsultasInterv()
    .then(dados => {
      res.status(200).json(dados)
    })
    .catch(erro => {
      res.status(521).json({erro: erro, mensagem: "Erro na obtenção da lista de nomes."})
    })
});


router.get('/consultas/interv/:id', function(req, res, next) {
  Consulta.getInterv(req.params.id)
    .then(dados => {
      res.status(200).json(dados)
    })
    .catch(erro => {
      res.status(521).json({erro: erro, mensagem: "Erro na obtenção das intervenções."})
    })
});

router.post('/consultas', function(req, res, next) {
  Consulta.addConsulta(req.body)
    .then(dados => {
      res.status(200).json(dados)
    })
    .catch(erro => {
      res.status(521).json({erro: erro, mensagem: "Erro na criação do registo."})
    })
});

router.delete('/consultas/:id', function(req, res, next) {
  Consulta.deleteConsulta(req.params.id)
    .then(dados => {
      res.status(200).json(dados)
    })
    .catch(erro => {
      res.status(521).json({erro: erro, mensagem: "Erro na eleminação do registo."})
    })
});


module.exports = router;
