const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUsers,
  getUser
}

function getUser (testConn) {
  const conn = testConn || connection
  return conn('landing').select()
}

// || //

function getUsers (testConn = connection) {
  return testConn('landing').select()
}
