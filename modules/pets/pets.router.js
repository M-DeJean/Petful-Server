const express = require('express')
const json = require('body-parser').json()
const STORE = require('./../../store')

const Pets = require('./pets.service')
const People = require('../people/people.service')

const PetsRouter = express.Router()

PetsRouter
.route('/')
.get((req, res) => {
  // Return all pets currently up for adoption.
   res.status(200).json(Pets.get())
})

PetsRouter
.route('/')
.delete(json, (req, res) => {
  // Remove a pet from adoption.
  Pets.dequeue(req.body.type)
  res.status(204).end()
  
})

module.exports = PetsRouter
