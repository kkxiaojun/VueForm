const mongoose = require('mongoose')

const formSchema = mongoose.Schema({
  title: String,
  form: Array
})

const form = module.exports = mongoose.model('form', formSchema)