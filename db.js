var environment = process.env.NODE_ENV || 'development'
var config = require('./knexfile')[environment]
var connection = require('knex')(config)

module.exports = {
  getActivities: getActivities,
  getActivities: getActivities
}

function getActivities (testDb) {
  // Use a test database if one is passed in, or the connection defined above.
  var db = testDb || connection
  return db('activities').select()
}

function getActivities (id, testDb) {
  var db = testDb || connection
  return db('activities').where('id', id)
}
