//import express from 'express'
const express = require('express')

const routes = express.Router()

routes.get('/', (req, res) => {
    return res.json({message: 'Hello worlk monorepo'})

})

routes.post('/post', (req, res) => {
    return res.json({message: 'New post monorepo'})    
})

module.exports = routes