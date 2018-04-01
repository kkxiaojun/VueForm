const mongoose = require('mongoose')
// var ObjectId = mongoose.Schema.Types.ObjectId;

const UserSchema = mongoose.Schema({
  id: String,
  username: { type: String, required: true },
  password: { type: String, required: true }
})

const User = module.exports = mongoose.model('user', UserSchema)