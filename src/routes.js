const express = require('express')
const routes = express.Router()


const groupController = require('./controllers/groupController')
const personController = require('./controllers/personController')


routes.get('/groups', groupController.index)
routes.get('/groups/:id', groupController.show)
routes.post('/groups', groupController.store)
routes.put('/groups', NotImplemented)
routes.delete('/groups', NotImplemented)


routes.get('/person', NotImplemented)
routes.get('/person/:id', personController.show)
routes.post('/person', NotImplemented)
routes.put('/person/:id', NotImplemented)
routes.delete('/person/:id', NotImplemented)


routes.get('/p', NotImplemented)
routes.get('/p/:id', personController.show)
routes.post('/p', NotImplemented)
routes.put('/p/:id', NotImplemented)
routes.delete('/p/:id', NotImplemented)


function NotImplemented(req, res){
    return res.status(501).json({})
}



module.exports = routes