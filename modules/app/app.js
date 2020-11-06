const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const { NODE_ENV } = require('../../config')
const PetsRouter = require('../pets/pets.router')
const app = express()

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(cors())
app.use(morgan(morganOption))

app.use('/api/people', require('../people/people.router'))
app.use('/api/pets', PetsRouter)

module.exports = app
