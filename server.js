const express = require('express')
const path = require('path')
const app = express()


app.use(express.json())

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'b2f98d08074a46bc880c2c58d5fc981d',
  captureUncaught: true,
  captureUnhandledRejections: true,
})



app.get('/', (req, res) => {
  rollbar.log('fetching index.js')
  res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.get('/style', (req, res) => {
  rollbar.log('fetching index.css')
  res.sendFile(path.join(__dirname, '/public/index.css'))
})

app.get('/js', (req, res) => {
  rollbar.log('fetching index.js')
  res.sendFile(path.join(__dirname, '/public/index.js'))
})
  
  
  const port = process.env.PORT || 5050;
  
  app.listen(port, function() {
      console.log(`Server rocking out on ${port}`)
  })