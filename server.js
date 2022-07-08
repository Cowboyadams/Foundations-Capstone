const express = require('express')
const path = require('path')
const app = express()


app.use(express.json())

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'fbaca1145c664bd6827e803e743bd11a',
  captureUncaught: true,
  captureUnhandledRejections: true,
})



app.get('/', (req, res) => {
  rollbar.log('fetching index.html')
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

app.get('/axios', (req, res) => {
  rollbar.log('fetching index.js')
  res.sendFile(path.join(__dirname, '/node_modules/axios/dist/axios.min.js'))
})

app.post("/server", (req,res) => {
  rollbar.log('filler')
  console.log('hit server')
  res.send(200)
})


module.exports = {
  manualChunky: (req, res) => {}
}
  
  
  const port = process.env.PORT || 5050;
  
  app.listen(port, function() {
      console.log(`Server rocking out on ${port}`)
  })