const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const { NODE_ENV } = require('../../config')
const CatsRouter = require('../cats/cats.router')
const PeopleRouter = require('../people/people.router')
const DogsRouter = require('../dogs/dogs.router')
const app = express()

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(cors())
app.use(morgan(morganOption))

app.use('/api/people', PeopleRouter)
app.use('/api/cats', CatsRouter)
app.use('/api/dogs', DogsRouter)

module.exports = app
