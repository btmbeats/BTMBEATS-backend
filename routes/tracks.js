const express = require('express');
const router = express.Router();
const knex = require('../knex');
const humps = require('humps');
const KEY = process.env.JWT_KEY
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const checkForTracks = (req, res, next) => {
  const {id} = req.params
  knex('tracks').where('id', id).then(track => {
    if (track.length < 1) {
      res.status(400).send(`No track found with id ${id}`)
    } else
      next()
  })
}

const getTracks = (req, res, next) => {
  const {id} = req.params

  if (id) {
    knex('tracks').where('id', id).select('id', 'title', 'cover', 'desc', 'duration', 'tempo', 'price').first().then(track => {
      res.status(200).send(track)
    }).catch(err => {
      next(err)
    })
  } else {
    knex('tracks').select('id', 'title', 'cover', 'desc', 'duration', 'tempo', 'price').then(tracks => {
      res.status(200).send(tracks)
    }).catch(err => {
      next(err)
    })
  }
}

const postTrack = (req, res, next) => {

  const {
    user_id,
    title,
    cover,
    desc,
    duration,
    tempo,
    price
  } = req.body
  console.log('This track\'s title is: ', req.body)
    const newTrack = {
      'user_id': user_id,
      'title': title,
      'cover': cover,
      'desc': desc,
      'duration': duration,
      'tempo': tempo,
      'price': price
    }
    knex('tracks').insert(newTrack).returning([
      'id',
      'title',
      'cover',
      'desc',
      'duration',
      'tempo',
      'price'
    ]).then(track => {
      console.log('This track\'s title is: ', track)
      res.status(200).send(track)
    }).catch(err => {
      next(err)
    })
}

const updateTrack = (req, res, next) => {
  const {id} = req.params
  const {
    title,
    cover,
    desc,
    duration,
    tempo,
    price
  } = req.body
  knex('tracks').where('id', id).update({title, cover, desc, price}).returning(['title', 'cover', 'desc', 'price']).then(track => {
    res.status(200).send(track[0])
  }).catch(err => {
    next(err)
  })
}

const deleteTrack = (req, res, next) => {
  const {id} = req.params
  knex('tracks').where('id', id).del().returning(['title', 'cover', 'desc', 'price']).then(track => {
    res.status(200).send(track[0])
  }).catch(err => {
    next(err)
  })
}

router.get('/', getTracks)
router.get('/:id', checkForTracks, getTracks)
router.post('/', postTrack)
router.patch('/:id', checkForTracks, updateTrack)
router.delete('/:id', checkForTracks, deleteTrack)

module.exports = router
