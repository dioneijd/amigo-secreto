require('dotenv').config()
   

const express = require('express')
const path = require('path')
const mongo = require('mongoose')
const cors = require('cors')

const routes = require('./routes.js')
const app = express()
const server = require('http').createServer(app)

mongo.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors())
app.use(express.json())
app.use(routes)

server.listen(process.env.PORT || 3000, console.log(`Server running on port ${process.env.PORT || 3000} ...`))