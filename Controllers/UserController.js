const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../Models/UserSchema')
const asyncHandler = require('express-async-handler')


const registerUser = asyncHandler(async (req, res) => {
    const { nom, prenom, email, password, telephone } = req.body
  
    if (!nom || !email || !password) {
      res.status(400)
      throw new Error('Please add all fields')
    }
  
    // Check if user existsz
    const userExists = await User.findOne({ email })
  
    if (userExists) {
      res.status(400)
      throw new Error('User already exists')
    }
  
    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
  
    // Create user
    const user = await User.create({
      nom,
      prenom,
      email,
      password: hashedPassword,
      telephone
    })
  
    if (user) {
      res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      })
    } else {
      res.status(400)
      throw new Error('Invalid user data')
    }
  })

  const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
  
    // Check for user email
    const user = await User.findOne({ email })
  
    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      })
    } else {
      res.status(400)
      throw new Error('Invalid credentials')
    }
  })

  const getMe = asyncHandler(async (req, res) => {
    res.status(200).json(req.user)
  })
  

  const generateToken = (id) => {
    return jwt.sign({ id }, 'cc', {
      expiresIn: '30d',
    })
  }

  module.exports = {
    registerUser,
    loginUser,
    getMe
  }