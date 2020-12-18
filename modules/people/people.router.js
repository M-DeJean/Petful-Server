const express = require('express')
const json = require('body-parser').json()
const People = require('./people.service')
const Dogs = require('../dogs/dogs.service')
const Cats = require('../cats/cats.service')
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
  .route('/dog')
  .delete(json, (req, res) => {
    // Remove a person from the queue
    People.dequeue()
    Dogs.dequeue()
    res.status(204).end()
  })

PeopleRouter
  .route('/cat')
  .delete(json, (req, res) => {
    // Remove a person from the queue
    People.dequeue()
    Cats.dequeue()
    res.status(204).end()
  })

PeopleRouter
  .route('/')
  .delete(json, (req, res) => {
    // Remove a person from the queue
    res.status(204).json(People.dequeue())
  })

module.exports = PeopleRouter
