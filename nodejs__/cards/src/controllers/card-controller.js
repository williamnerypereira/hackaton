const neDB = require('../configurations/database')
const { response } = require('../configurations/express')
const api = {}

api.findAll = (request, response) => {
    // Busca todos -> Get
    neDB.find({}).sort({name: 1}).exec((exception, cards) => {
        if(exception){
            const setense = 'Opa, erro na tentativa de inserir um customer!'
            console.log(setence, exception)

            response.status(exception.status | 400);
            response.json({'mensagem': setense})
        }
        
        response.status(201)
        response.json(cards)
    })

}

module.exports = api