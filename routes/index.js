var express = require('express')

var db = require('../db')

module.exports = {
  get: get
}

function get (req, res) {
  db.getActivities()
    .then(function (activities) {
      res.render('index', { activities: activities })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}
