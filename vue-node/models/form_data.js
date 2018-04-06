const mongoose = require('mongoose')
const formDataSchema = mongoose.Schema({
    id: String,
    title: String,
    time: String,
    form: Array
})
const formData = module.exports = mongoose.model('formData', formDataSchema)