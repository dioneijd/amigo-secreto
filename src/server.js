require('dotenv').config()
   

const express = require('express')
const path = require('path')
const mongo = require('mongoose')

const routes = require('./routes.js')

const app = express();

const server = require('http').createServer(app)

mongo.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})


app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'public'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

app.use(express.json())
app.use(routes)



server.listen(process.env.PORT || 3000)