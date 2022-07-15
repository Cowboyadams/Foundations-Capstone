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

//memory
const localList = [
  ['marshland', 'marshland', 'jungle-mountains', 'deep-jungle','oasis-desert','tropical-ocean', 'acid-wastes'],
  ['marshland','mediterranean-hills','arid-mountains','jungle','sand-dunes','tropical-ocean',      'wasteland'],
  ['savanna','sand-dunes','high-desert','sparse-jungle','sand-dunes','tropical-ocean',            'wasteland'],
  ['marshland','rolling-hills','jungle-mountains','deep-forest','savanna','ocean',              'acid-wastes'],
  ['temperate-meadows','rolling-hills','mountain-range','forest-grove','semi-arid-desert','ocean','wasteland'],
  ['temperate-meadows','rolling-hills','mountain-range','sparse-forest','arid-desert','ocean',    'wasteland'],
  ['tundra','tundra-hills','artic-mountain-range','taigia','cold-desert','polar-ocean',         'acid-wastes'],
  ['tundra','tundra-hills','artic-mountain-range','taigia','frozen-desert','polar-ocean',         'wasteland'],
  ['tundra','tundra-hills','artic-mountain-range','taigia','frozen-wastes','polar-ocean',     'frozen-wastes']
]
let manualIdList = [0]

app.get('/', (req, res) => {
  rollbar.log('fetching index.html')
  res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.get('/style', (req, res) => {
  rollbar.log('fetching index.css')
  res.sendFile(path.join(__dirname, '/public/index.css'))
})

app.get('/music', (req, res) => {
  rollbar.log('fetching music')
  res.sendFile(path.join(__dirname, '/public/Bongo2.mp3'))
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
  rollbar.log('post request completed')
  console.log('hit server')
  console.log(req.body[1])
  class manualChunk {
    constructor (){
        this.ID = function generateID(){
          let idListid = manualIdList.length -1
          let idNum = manualIdList[idListid] + 1
          manualIdList.push(idNum)
          let tag = `M${idNum}`
                    return tag}();
        this.biome = req.body[0];
        this.temperament = req.body[1];
        this.local = function localSelect () {
                let x = req.body[0]
                let y = req.body[1]
                let newLocal = localList[y][x]
                return newLocal
            }(req.body);
        }
      }
      let newChunk = new manualChunk
      
  console.log(newChunk)
  res.send(newChunk)
})


module.exports = {
  manualChunky: (req, res) => {}
}
  
  
  const port = process.env.PORT || 5050;
  
  app.listen(port, function() {
      console.log(`Server rocking out on ${port}`)
  })