const express = require('express')
const { people } = require('../../store')
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
.patch(json, (req, res) => {
  // Add a new person to the queue.
  // const newPerson = req.body.name
  // People.enqueue(newPerson)
  // res.status(204).json(People.enqueue)
  People.enqueue(People.dequeue())
  res.status(200).json(People.get())

})

module.exports = PeopleRouter
