const app = require('./modules/app/app')
const { PORT } = require('./config')

app.listen(PORT, () => {
  console.log(`[petful-server] Listening on ${PORT}.`)
})
