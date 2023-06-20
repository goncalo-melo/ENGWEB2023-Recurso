const mongoose = require('mongoose')

var operacaoSchema = new mongoose.Schema({
    codigo: String,
    nome: String,
    descricao: String
})

var consultaSchema = new mongoose.Schema({
    _id: Number,
    nome: String,
    idade: Number,
    sexo: String,
    data: String,
    nr_operacoes: Number,
    operacoes: [operacaoSchema]
})

module.exports = mongoose.model('consulta', consultaSchema)

