const express = require('express')
const routes = express.Router()


const groupController = require('./controllers/groupController')
const personController = require('./controllers/personController')


routes.get('/:id', (req, res) => {
    res.render('ShowFriend/index.html')
})


routes.get('/', (req, res) => {
    res.render('NewGroup/index.html')
})
routes.get('/showGroup/:id', (req, res) => {
    res.render('ShowGroup/index.html')
})


routes.get('/groups/:id', groupController.show)
routes.post('/groups', groupController.store)
routes.get('/person/:id', personController.show)


module.exports = routes