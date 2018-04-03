const mongoose = require('mongoose')
const formDataSchema = mongoose.Schema({
    title: String,
    forms: Array
})
const formData = module.exports = mongoose.model('formData', formDataSchema)