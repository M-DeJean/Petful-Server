const express = require('express')
const json = require('body-parser').json()
const Dogs = require('./dogs.service')
const People = require('../people/people.service')

const DogsRouter = express.Router()

DogsRouter
  .route('/')
  .get((req, res) => {
    // Return all pets currently up for adoption.
    res.status(200).json(Dogs.get())
  })

DogsRouter
  .route('/')
  .delete(json, (req, res) => {
    // Remove a pet from adoption.
    Dogs.enqueue(Dogs.dequeue())
    People.enqueue(People.dequeue())
    res.status(204).end()
  })

module.exports = DogsRouter
