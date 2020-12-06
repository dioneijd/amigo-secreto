const express = require('express')
const routes = express.Router()


const groupController = require('./controllers/groupController')
const personController = require('./controllers/personController')


routes.get('/', (req, res) => {
    res.render('index.html')
})

routes.get('/groups/:id', groupController.show)
routes.post('/groups', groupController.store)
routes.get('/:id', personController.show)


module.exports = routes