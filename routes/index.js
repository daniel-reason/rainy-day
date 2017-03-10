var express = require('express')

var db = require('../db')

module.exports = {
  get: get,
  form: form,
  saveForm: saveForm,
  add:add
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

function form (req, res) {
  res.render('form')
}

function saveForm(req, res) {
  db.makeRecommendation(req.body)
  .then(function (activities) {
    res.render('index',{activities:activities})
  })
}
