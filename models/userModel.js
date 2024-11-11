const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const Joi = require("joi")



const userSchema = new mongoose.Schema({
  name : {
    type: String,
    required: [true, 'A user must have a name'],
  },
  email: {
    type: String,
    required: [true, 'A user must have an email'],
    unique: [true, 'This email is already in use']
  },
  password: {
    type: String,
    required: [true, 'A user must have a password'],
  }

}, {timestamps: true})


const User = mongoose.model('User', userSchema)


userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next()

  this.password = await bcrypt.hash(this.password, 12)
  
})

module.exports = User
