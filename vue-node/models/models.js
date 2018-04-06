const mongoose = require('mongoose')
const modelsSchema = mongoose.Schema({
    title: String,
    form: Array
})
const models = module.exports = mongoose.model('models', modelsSchema)
