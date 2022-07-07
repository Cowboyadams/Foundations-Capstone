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
  rollbar.log('Hello world!')
    res.sendFile(path.join(__dirname, '/public/index.html'))
  })
  
  
  const port = process.env.PORT || 5050;
  
  app.listen(port, function() {
      console.log(`Server rocking out on ${port}`)
  })