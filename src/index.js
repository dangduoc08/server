const express = require('express')
const morgan = require('morgan')

const app = express()

const findFib = n =>
  n <= 1 ? n : findFib(n - 1) + findFib(n - 2)

app
  .use(morgan('dev'))
  .use(express.urlencoded({ extended: false }))
  .use(express.json())

app.get('/kill', () => process.exit(1))

app.get('/fib/:number', (req, res) => {
  const {
    number
  } = req.params

  res.send(`fibonacci ${number} is ${findFib(number)}`)
})

const server = app.listen(8080)

server.on('listening', () => {
  console.log('server connect on port 3008')
})

server.on('error', err => {
  console.error(err)
})
