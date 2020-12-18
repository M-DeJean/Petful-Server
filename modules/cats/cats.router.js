const express = require('express')
const json = require('body-parser').json()
const Cats = require('./cats.service')
const People = require('../people/people.service')

const CatsRouter = express.Router()

CatsRouter
  .route('/')
  .get((req, res) => {
    // Return all pets currently up for adoption.
    res.status(200).json(Cats.get())
  })

CatsRouter
  .route('/')
  .delete(json, (req, res) => {
    // Remove a pet from adoption.
    Cats.enqueue(Cats.dequeue())
    People.enqueue(People.dequeue())
    res.status(204).end()
  })

module.exports = CatsRouter
