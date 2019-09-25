const usersRouter = require('express').Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')


usersRouter.get('/', async (request, response, next) => {
    try{
      const users = await User.find({}).populate('blogs')
      return response.json(users)
    } catch(exception){
      next(exception)
    }
  })



usersRouter.post('/', async (request, response, next) => {
    try{
        const body = request.body
        const salt = 10

        const passwordHash = await bcrypt.hash(body.password, salt)
     
        const user = new User({
            username: body.username,
            name: body.name,
            password: passwordHash
        })
        const savedUser = await user.save()
        response.json(savedUser)

    } catch(exception){
      next(exception)
    }
  })


module.exports = usersRouter