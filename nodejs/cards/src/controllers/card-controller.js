//const { request, response } = require('express');
const neDB = require('../configurations/database')
const api = {}

const setense = 'Erro na operação, tente novamente.';

api.findAll = (request, response) => {
    neDB.find({}).sort({name: 1}).exec((exception, customers) => {
        if(exception){
            //const setense = 'Opa, erro na tentativa de inserir um customer!'
            console.log(setence, exception)

            response.status(exception.status | 400);
            response.json({'mensagem': setense})
        }
        
        response.status(201)
        response.json(customers)
    })
}

api.save = (request, response) => {
    const cannonical = request.body

    neDB.insert(cannonical, (exception, customer) => {
        if(exception){
            //const setense = 'Opa, erro na tentativa de inserir um customer!'
            console.log(setence, exception)

            response.status(exception.status | 400);
            response.json({'mensagem': setense})
        }

        
        response.json(customer)
        response.status(201)
    })
}

api.findOne = (request, response) => {
    neDB.findOne({ documentNumber: 123456789 }).exec((exception, customers) => {
        if (exception) {
           // const setence = 'Deu ruim na tentativa de listar todos os customers!'
            console.log(setence, exception)
            response.status(exception.status | 400)
            response.json({ 'mensagem': setence })
        }
        response.status(201)
        response.json(customers)
    })
}

api.delete = (request, response) => {

    neDB.remove({ documentNumber: 123456789 }).exec((exception, customers) => {
        if (exception) {
            // const setence = 'Deu ruim na tentativa de listar todos os customers!'
             console.log(setence, exception)
             response.status(exception.status | 400)
             response.json({ 'mensagem': setence })
         }
      });

    response.status(201)
    response.json(customers)     
}


module.exports = api