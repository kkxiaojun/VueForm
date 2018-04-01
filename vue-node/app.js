const express = require('express')
const app = express()
const config = require('./config/db')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
mongoose.connect(config.mongodb)

const index = require('./router/index')
const movie = require('./router/movie')
const form = require('./router/form')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/',index)
app.use('/api',movie)
app.use('/api',form)

app.listen(3000,() => {
    console.log('app listening on port 3000.')
})