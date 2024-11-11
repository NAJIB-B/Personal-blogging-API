const jwt = require("jsonwebtoken")
const Joi = require("joi")

const catchAsync = require("../utils/catchAsync")
const AppError = require("../utils/appError")
const {schema} = require("../models/userModel") 
const User = require("../models/userModel")

const signUpSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().min(8).required(),
  confirmPassword: Joi.string().min(8).required()
})

exports.signUp = catchAsync( async(req, res, next) => {

  const { error, value} = signUpSchema.validate(req.body)

  if (error) {
    return next(new AppError(error.message, 400))
  }

  if (req.body.password !== req.body.confirmPassword) {
    return next(new AppError("password and confirm password should be the same", 400))
  }


  const data = {
    name: req.name,
    email: req.email,
    password: req.password
  }
  const user = await User.create(req.body)

  const token = jwt.sign({id:user._id}, process.env.JWT_SECRET)

  user.password = undefined;

  res.status(201).json({
    message: 'user created successfully',
    token,
    user
  })

})
