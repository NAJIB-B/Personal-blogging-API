const mongoose = require('mongoose')


const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A post must have a title'],
    unique: true
  },
  content: {
    type: String,
    required: [true, 'A post must have content']
  },
  category: {
    type: String,
    required: [true, 'A post must have a category']
  },
  tags:{
    type: String,
    required: [true, 'A post must have a category']
  }
}, {timestamps: true})


const Post = mongoose.model('Post', postSchema)

module.exports = Post
