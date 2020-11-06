const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const { NODE_ENV } = require('../../config')
const PetsRouter = require('../pets/pets.router')
const PeopleRouter = require('../people/people.router')
const app = express()

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(cors())
app.use(morgan(morganOption))

app.use('/api/people', PeopleRouter)
app.use('/api/pets', PetsRouter)

module.exports = app
