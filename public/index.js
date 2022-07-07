//Query Selectors
const newChunkBtn = document.querySelector('#newChunkBtn')



//memory
let idList = [1]
let chunkList = [ { ID: 1, biome: "plains", temperament: "temperate"}]
const temperamentArr = [
        ['hot/dry', "hot/mod", "hot/wet"],
        ['temp/dry','temperate','temp/wet'],
        ['cold/dry', 'cold/mod', 'cold/wet']
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
    let newBiome = 'plains'
   if (baseBiome === "plains") { 
        if (biomeRoll === 0) {newBiome = "hills"}
        else if (biomeRoll === 1) {newBiome = "forest"}
        else if (biomeRoll === 2) {newBiome = "plains"}
        else if (biomeRoll === 3) {newBiome = "ocean"}
        else if (biomeRoll === 4) {newBiome = "plains"}
        else if (biomeRoll === 5) {newBiome = "plains"}
      }
    else if (baseBiome === "hills") { 
        if (biomeRoll === 0) { newBiome = "plains"}
        else if (biomeRoll === 1) { newBiome = "mountains"}
        else if (biomeRoll === 2) {newBiome = "forest"}
        else if (biomeRoll === 3) {newBiome = "hills"}
        else if (biomeRoll === 4) {newBiome = "hills"}
        else if (biomeRoll === 5) {newBiome = "hills"}
      }
    else if (baseBiome === "mountains") {
        if (biomeRoll === 0) {newBiome = "hills"}
        else if (biomeRoll === 1) {newBiome = "mountains"} 
        else if (biomeRoll === 2) {newBiome = "desert"} 
        else if (biomeRoll === 3) {newBiome = "wasteland"}   
      }
    else if (baseBiome === "forest") {
        if (biomeRoll === 0) {newBiome = "forest"}
        else if (biomeRoll === 1) {newBiome = "ocean"}
        else if (biomeRoll === 2) {newBiome = "hills"}
        else if (biomeRoll === 3) {newBiome = "plains"}
        else if (biomeRoll === 4) {newBiome = "forest"}
        else if (biomeRoll === 4) {newBiome = "forest"}
      }
    else if (baseBiome === "desert") { 
        if (biomeRoll === 0) {newBiome = "mountains"}
        else if (biomeRoll === 1) {newBiome = "desert"}
        else if (biomeRoll === 2) {newBiome = "ocean"}
        else if (biomeRoll === 3) {newBiome = "wasteland"}
        else if (biomeRoll === 4) {newBiome = "desert"}
        else if (biomeRoll === 5) {newBiome = "desert"}   
  }
    else if (baseBiome === "ocean") {
        if (biomeRoll === 0) {newBiome = "plains"}
        else if (biomeRoll === 1) {newBiome = "ocean"}
        else if (biomeRoll === 2) {newBiome = "forest"}
        else if (biomeRoll === 3) {newBiome = "desert"}
        else if (biomeRoll === 4) {newBiome = "ocean"}
        else if (biomeRoll === 5) {newBiome = "ocean"}   
      }
    else if (baseBiome === "wasteland") {  
        if (biomeRoll === 0) {newBiome = "desert"}
        else if (biomeRoll === 1) {newBiome = "mountains"}
        else if (biomeRoll === 2) {newBiome = "desert"}
        else if (biomeRoll === 3) {newBiome = "mountains"}
        else if (biomeRoll === 4) {newBiome = "Wasteland"}
        else if (biomeRoll === 5) {newBiome = "Wasteland"}
     }
    return newBiome
    }(lastChunk);

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
}}

function generateNewChunk () {
    let newChunk = new chunk
    chunkList.push(newChunk)
    asdf = chunkList.length - 1
    lastChunk = chunkList[asdf]
    console.log(chunkList)
}
    
newChunkBtn.addEventListener('click', generateNewChunk)

