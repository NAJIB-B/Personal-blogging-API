const { query } = require('express')
const { validationResult } = require('express-validator')

const AppError = require('../utils/appError')
const Post = require('../models/postsModel')
const catchAsync = require('../utils/catchAsync')


exports.getAllPosts = catchAsync(async(req, res, next) => {
    const SearchTerm = req.query?.term
    let query;
    if (SearchTerm) {
    query =  Post.find({ $or : [
      {title : {$regex: SearchTerm, $options: 'i'}},
      {category : {$regex: SearchTerm, $options: 'i'}},
      {content : {$regex: SearchTerm, $options: 'i'}},
      {tags : {$in: [SearchTerm]}},
    ]}).select('-__v')

    } else {
      query = Post.find().select('-__v')

    }

    query.sort('-updatedAt')
    const posts = await query

  

    res.status(200).json({
      status: 'success',
      results: posts.length,
      data: posts
    })
})


exports.getPost = async(req, res, next) => {
  try {
    const post = await Post.findById(req.params.id)

    if (!post) {
      return next(new AppError('post not found. please make sure id is valid', 404))
    }
    
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


exports.createPost = catchAsync(async(req, res, next) => {

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return next(new AppError(errors, 400)) 
     }

    const post = await Post.create(req.body)
    
    res.status(201).json({
      status: 'success',
      post
    })

})



exports.updatePost = catchAsync(async(req, res, next) => {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body,
      {
        new: true,
        runValidators: true
      })
    
    if (!post) {
      return next(new AppError('post not found. please make sure id is valid', 404))
    }

    res.status(200).json({
      status: 'success',
       post
    })
})


exports.deletPost = catchAsync(async(req, res, next) => {
    const post = await Post.findByIdAndDelete(req.params.id)

    if (!post) {
      return next(new AppError('post not found. please make sure id is valid', 404))
    }
    
    res.status(204).json({
      status: 'success',
      message: 'Post deletey successfully',
      body: null
    })
})
