var environment = process.env.NODE_ENV || 'development'
var config = require('./knexfile')[environment]
var connection = require('knex')(config)

module.exports = {
  getActivities: getActivities,
  makeRecommendation: makeRecommendation

}

function getActivities (testDb) {
  var db = testDb || connection
  return db('activities').select()
}

function makeRecommendation (req, testDb){
  var db = testDb || connection
  return db('activities')
    .where({
      time:req.time,
      location:req.location
    })
    .select('activity', 'time')
}
