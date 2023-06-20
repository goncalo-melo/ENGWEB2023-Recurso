var Consulta = require('../models/consulta')

module.exports.list = () => {
    return Consulta
            .find()
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}


module.exports.getConsulta = id => {
    return Consulta
            .findOne({_id: id})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}


module.exports.getConsultasIdade = idade => {
    return Consulta
            .find({idade: {$gt: idade}})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.getConsultasSexo = sexo => {
    return Consulta
            .find({sexo: sexo})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.getConsultasNomes = () => {
    return Consulta
            .distinct("nome")
            .sort({nome: 1})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.getConsultasInterv = () => {
    return Consulta
            .distinct("operacoes")
            .sort({nome: 1})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.getInterv = id => {
    return Consulta
        .aggregate([{$unwind:"$operacoes"}, {$match: {"operacoes.codigo": id}}])
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
}

module.exports.addConsulta = c => {
    return Consulta
            .create(c)
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}


module.exports.deleteConsulta = id => {
    return Consulta
            .deleteOne({_id:id})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}