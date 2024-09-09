const { query } = require('express')
const Post = require('../models/postsModel')


exports.getAllPosts = async(req, res, next) => {
  try {
    const SearchTerm = req.query?.term
    let query;
    if (SearchTerm) {
    query =  Post.find({ $or : [
      {title : {$regex: SearchTerm, $options: 'i'}},
      {category : {$regex: SearchTerm, $options: 'i'}},
      {content : {$regex: SearchTerm, $options: 'i'}},
      {tags : {$in: [SearchTerm]}},
    ]})

    } else {
      query = Post.find()
    }

    query.sort('-updatedAt')
    const posts = await query
  

    res.status(200).json({
      status: 'success',
      results: posts.length,
      data: posts
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      error
    })
    
  }
}


exports.getPost = async(req, res, next) => {
  try {
    const post = await Post.findById(req.params.id)
    
    res.status(200).json({
      status: 'success',
       post
    })
  } catch (error) {
    res.status(400).json({
      error
    })
    
  }
}


exports.createPost = async(req, res, next) => {
  try {

    const post = await Post.create(req.body)
    
    res.status(201).json({
      status: 'success',
      post
    })
  } catch (error) {

    res.status(400).json(
      {
        error
      }
    )
    
  }

}



exports.updatePost = async(req, res, next) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body,
      {
        new: true,
        runValidators: true
      })
    
    res.status(200).json({
      status: 'success',
       post
    })
  } catch (error) {
    res.status(400).json({
      error
    })
    
  }
}


exports.deletPost = async(req, res, next) => {
  try {
    await Post.findByIdAndDelete(req.params.id)
    
    res.status(204).json({
      status: 'success',
      message: 'Post deletey successfully',
      body: null
    })
  } catch (error) {
    res.status(400).json({
      error
    })
    
  }
}
