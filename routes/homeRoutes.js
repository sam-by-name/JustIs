const express = require('express')
const db = require('../db')
const router = express.Router()

router.get('/', (req, res) => {
  res.redirect('/home')
})

router.get('/home', (req, res) => {
  db.getUser()
    .then(landing => {
      res.render('./templates/landing', landing[0])
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/terminal', (req, res) => {
  res.render('./templates/terminal')
})

// router.get('/terminal', (req, res) => {
//   db.getUser()
//     .then(users => {
//       res.render('./templates/index', {users: users})
//     })
//     .catch(err => {
//       res.status(500).send('DATABASE ERROR: ' + err.message)
//     })
// })

module.exports = router
