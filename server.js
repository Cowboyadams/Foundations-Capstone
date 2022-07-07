const express = require('express')
const path = require('path')
const app = express()


app.use(express.json())

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'fd8be1088f314dfcbc4915575a277e39',
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
  
  
  const port = process.env.PORT || 5050;
  
  app.listen(port, function() {
      console.log(`Server rocking out on ${port}`)
  })