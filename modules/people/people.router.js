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
.post(json, (req, res) => {
  const name = req.body
  res.status(201).json(People.enqueue(req.body.name))
})

PeopleRouter
.route('/')
.delete(json, (req, res) => {
  // Remove a person from the queue
  
  res.status(204).json(People.dequeue())

})

module.exports = PeopleRouter
