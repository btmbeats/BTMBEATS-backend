const express = require('express');
const router = express.Router();
const knex = require('../knex');
const humps = require('humps');
const KEY = process.env.JWT_KEY
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const checkForUser = (req, res, next) => {
  const {id} = req.params
  knex('users').where('id', id).then(user => {
    if (user.length < 1) {
      res.status(400).send(`No user found with id ${id}`)
    } else
      next()
  })
}

const checkForExistingEmail = (req, res, next) => {
  const {email_address} = req.body
  knex('users').where('email_address', email_address).then(user => {
    if (user.length === 1) {
      res.status(400).send('Email address already registered')
    } else
      next()
  })
}

const getUsers = (req, res, next) => {
  const {id} = req.params

  if (id) {
    knex('users').where('id', id).select('id', 'artist_name','email_address').first().then(user => {
      console.log(user);
      res.status(200).send(user)
    }).catch(err => {
      next(err)
    })
  } else {
    knex('users').select('id', 'artist_name', 'email_address').then(users => {
      res.status(200).send(users)
    }).catch(err => {
      next(err)
    })
  }
}

const postUser = (req, res, next) => {

  const {
    artist_name,
    email_address,
    password,
  } = req.body
  // console.log('Hello, my name is: ', req.body)
  bcrypt.hash(password, 10, (err, hashed_password) => {
    const newUser = {
      'artist_name': artist_name,
      'email_address': email_address,
      'hashed_password': hashed_password,
    }
    // console.log('buenos dias: ', newUser)
    knex('users').insert(newUser).returning([
      'id',
    ]).then(user => {
      // console.log('Hello, my username is: ', user)
      const token = jwt.sign({
        'id': user[0].id,
      }, process.env.JWT_KEY)
      // console.log("token is, ", token);
      res.cookie("token" , token, {httpOnly:true})
      res.send({token})
    }).catch(err => {
      next(err)
    })
  })
}

const updateUser = (req, res, next) => {
  const {id} = req.params
  const {
    artist_name,
    email_address,
    password,
  } = req.body
  knex('users').where('id', id).update({artist_name, email_address, password}).returning(['email_address', 'artist_name']).then(user => {
    res.status(200).send(user[0])
  }).catch(err => {
    next(err)
  })
}

const deleteUser = (req, res, next) => {
  const {id} = req.params
  knex('users').where('id', id).del().returning(['artist_name', 'email_address']).then(user => {
    res.status(200).send(user[0])
  }).catch(err => {
    next(err)
  })
}

router.get('/', getUsers)
router.get('/:id', checkForUser, getUsers)
router.post('/', checkForExistingEmail, postUser)
router.patch('/:id', checkForUser, updateUser)
router.delete('/:id', checkForUser, deleteUser)

module.exports = router
