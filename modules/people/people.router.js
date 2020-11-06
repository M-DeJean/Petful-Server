const express = require('express')
const json = require('body-parser').json()

const People = require('./people.service')

const PeopleRouter = express.Router()

PeopleRouter
.route('/')
.get((req, res) => {
  // Return all the people currently in the queue.
  res.status(200).json(People.get())

})

PeopleRouter
.route('/')
.post(json, (req, res) => {
  // Add a new person to the queue.

})

module.exports = PeopleRouter
