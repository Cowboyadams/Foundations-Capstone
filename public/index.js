//Query Selectors
const newChunkBtn = document.querySelector('#newChunkBtn')



//memory
let idList = [1]
let chunkList = [ { ID: 1, biome: 0, temperament: 4, local: 'temperate meadows'}]
const temperamentArr = [
        [2,1,0],
        [5,4,3],
        [8,7,6]
    ]
const localList =[
        ['marshland', 'marshland', 'jungle mountains', 'deep jungle','oasis desert','tropical ocean','acid wastes'],
        ['marshland','mediterranean hills','arid mountans','jungle','sand dunes','tropical ocean','wasteland'],
        ['savanna','sand dunes','high desert','sparse jungle','sand dunes','tropical ocean','wasteland'],
        ['marshland','rolling hills','jungle mountains','deep forest','savanna','ocean','acid wastes'],
        ['temperate meadows','rolling hills','mountain range','forest grove','semi-arid desert','ocean','wasteland'],
        ['temperate meadows','rolling hills','mountain range','sparse forest','arid desert','ocean','wasteland'],
        ['tundra','tundra hills','artic mountain range','taigia','cold desert','polar ocean','acid wastes'],
        ['tundra','tundra hills','artic mountain range','taigia','frozen desert','polar ocean','wasteland'],
        ['tundra','tundra hills','artic mountain range','taigia','frozen wastes','polar ocean','frozen wastes']

]

//identifiers
let asdf = chunkList.length - 1
let lastChunk = chunkList[asdf]

//functions
function getTempCoords(temperament) {
for (y = 0; y < temperamentArr.length; y++){
   let x = temperamentArr[y].indexOf(temperament)
   if (x > -1) {
    return [x,y]
   }
}
}

//Chunk Builder--------------------------------------------------------------------------------------
class chunk {
    constructor() {
    //ID builder
    this.ID = function generateID(){
        let idListid = idList.length -1
        let idNum = idList[idListid] + 1
        idList.push(idNum)
                  return idNum}();

    //Biome builder
this.biome = function generateBiome () {
    
    let biomeRoll = Math.floor(Math.random() * 6)
    let baseBiome = lastChunk.biome
    let newBiome = 0
   if (baseBiome === 0) { 
        if (biomeRoll === 0) {newBiome = 1}
        else if (biomeRoll === 1) {newBiome = 3}
        else if (biomeRoll === 2) {newBiome = 0}
        else if (biomeRoll === 3) {newBiome = 5}
        else if (biomeRoll === 4) {newBiome = 0}
        else if (biomeRoll === 5) {newBiome = 0}
      }
    else if (baseBiome === 1) { 
        if (biomeRoll === 0) { newBiome = 0}
        else if (biomeRoll === 1) { newBiome = 2}
        else if (biomeRoll === 2) {newBiome = 3}
        else if (biomeRoll === 3) {newBiome = 1}
        else if (biomeRoll === 4) {newBiome = 1}
        else if (biomeRoll === 5) {newBiome = 1}
      }
    else if (baseBiome === 2) {
        if (biomeRoll === 0) {newBiome = 1}
        else if (biomeRoll === 1) {newBiome = 2} 
        else if (biomeRoll === 2) {newBiome = 4} 
        else if (biomeRoll === 3) {newBiome = 6}   
      }
    else if (baseBiome === 3) {
        if (biomeRoll === 0) {newBiome = 3}
        else if (biomeRoll === 1) {newBiome = 5}
        else if (biomeRoll === 2) {newBiome = 1}
        else if (biomeRoll === 3) {newBiome = 0}
        else if (biomeRoll === 4) {newBiome = 3}
        else if (biomeRoll === 4) {newBiome = 3}
      }
    else if (baseBiome === 4) { 
        if (biomeRoll === 0) {newBiome = 2}
        else if (biomeRoll === 1) {newBiome = 4}
        else if (biomeRoll === 2) {newBiome = 5}
        else if (biomeRoll === 3) {newBiome = 6}
        else if (biomeRoll === 4) {newBiome = 4}
        else if (biomeRoll === 5) {newBiome = 4}   
  }
    else if (baseBiome === 5) {
        if (biomeRoll === 0) {newBiome = 0}
        else if (biomeRoll === 1) {newBiome = 5}
        else if (biomeRoll === 2) {newBiome = 3}
        else if (biomeRoll === 3) {newBiome = 4}
        else if (biomeRoll === 4) {newBiome = 5}
        else if (biomeRoll === 5) {newBiome = 5}   
      }
    else if (baseBiome === 6) {  
        if (biomeRoll === 0) {newBiome = 4}
        else if (biomeRoll === 1) {newBiome = 2}
        else if (biomeRoll === 2) {newBiome = 4}
        else if (biomeRoll === 3) {newBiome = 2}
        else if (biomeRoll === 4) {newBiome = 6}
        else if (biomeRoll === 5) {newBiome = 6}
     }
    return newBiome
    }(lastChunk);

    //temperament selector
    this.temperament = function temperamentSelect () {

        let baseTemperamentCoords = getTempCoords(lastChunk.temperament)
        let x = baseTemperamentCoords[0]
        let y = baseTemperamentCoords[1]
        const temperamentOptions = []
        let changeChanceRoll = Math.floor(Math.random() * 3)
        if (changeChanceRoll === 1) {
        for (let i = -1; i < 2; i = i + 2) {
            let currTempOptions = temperamentArr[y][x + i]
            if (currTempOptions) {
                temperamentOptions.push(currTempOptions)
            }
        }
        for (let i = -1; i < 2; i = i + 2) {
            if (temperamentArr[y + i]) {
                let currTempOptions = temperamentArr[y + i][x]
                if (currTempOptions) {
                    temperamentOptions.push(currTempOptions)
                }
            }
        }
       let temperamentRoll = Math.floor(Math.random() * (temperamentOptions.length - 1))
        let newTemperament = temperamentOptions[temperamentRoll]
        return newTemperament
    } else {
        return lastChunk.temperament}}(lastChunk);

    this.local = function localSelect () {
        let x = lastChunk.biome
        let y = lastChunk.temperament
        let newLocal = localList[y,x]
        return newLocal
    }(lastChunk);
}}

function generateNewChunk () {
    let newChunk = new chunk
    chunkList.push(newChunk)
    asdf = chunkList.length - 1
    lastChunk = chunkList[asdf]
    console.log(chunkList)
}
    
newChunkBtn.addEventListener('click', generateNewChunk)

