var express = require('express')
var router = express.Router()
const knex = require('../knex')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// READ ALL records for this table
router.get('/', (req, res, next) => {
  knex('users')
    .then((rows) => {
      res.json(rows)
    })
    .catch((err) => {
      next(err)
    })
})
// READ ONE record for this table
router.get('/:id', (req, res, next) => {
  knex('users')
    .where('id',req.params.id)
    .then((rows) => {
      res.json(rows)
    })
    .catch((err) => {
      next(err)
    })
})
// CREATE ONE record for this table
router.post('/', (req, res, next) => {
  res.send('CREATED RECORD')
})
// UPDATE ONE record for this table
router.put('/:id', (req, res, next) => {
  res.send('UPDATED RECORD')
})
// DELETE ONE record for this table
router.delete('/:id', (req, res, next) => {
  res.send('DELETED RECORD')
})


module.exports = router;
