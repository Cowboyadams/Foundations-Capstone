//biome ID's
// 0 = Plains, 1 = Hills, 2 = Mountains, 3 = Forest 
// 4 = Desert, 5 = Ocean, 6 = Wasteland

//Temprament ID's
// 0 = Hot/Wet, 1 = Hot/Av, 2 = Hot/Dry 
// 3 = Temp/Wet, 4 = Temperate, 5 = Temp/Dry
// 6 = Cold/wet, 7 = Cold/Av, 8 = Cold/dry

//Query Selectors
const newChunkBtn = document.querySelector('#newChunkBtn')
const submitBtn = document.getElementById('submitBtn')
const form = document.getElementById('form')


//DIV Creation
body = document.getElementsByTagName('body')[0];
console.log(body)
const chunkContainer = document.createElement('div')
    chunkContainer.className = "flex-container"
    chunkContainer.id = "chunk-container"
    body.appendChild(chunkContainer)


//memory
let idList = [1]
let manualIdList = []
let chunkList = [ { ID: 1, biome: 0, temperament: 4, local: 'temperate meadows'}]
const temperamentArr = [
        [2,1,0],
        [5,4,3],
        [8,7,6]
    ]
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
const plainsFeatures = [
    ["City"],
    ["Small Town", "Ghost Town", "Homestead", "Horse Herd"],
    ['Road', "Ravine", "Hot Springs", "Cultivated Farmland", "Cattle Herd"],
    ["Springs", "River", "Trail"],
    ["Pond", "Stream"]
]
const hillsFeatures = [
    ["Underground City"],
    ["Small Town","Ghost Town", "Homestead", "Abandoned Mine"],
    ["Road", "Ravine", "Hot Springs", "Gyser"],
    ["Springs", "River", "Trail", "Valley", "Lake"],
    ["Ponds", "Streams", "Waterfall"]
]
const mountainFeatures = [
    ["Active Volcano"],
    ["Homestead", "Lava Flow", "Open Caves", "Dormant Volcano"],
    ["Road", "Ravine", "Hot Springs", "Glacier"],
    ["Springs", "River", "Meadow", "Trail", "Valley", "Rock Glacier", "Lake"],
    ["Ponds", "Streams", "Gully", "Water Fall"]
]
const forestFeatures = [
    ["Ancient Temple"],
    ["Small Town", "Ghost town", "Homestead", "Ancient Shrine", "Treehome"],
    ["Road", "Ravine", "Hot Springs", "Bamboo Forest"],
    ["Springs", "River", "Trail", "Lake"],
    ["Pond", "Stream"]
]
const desertFeatures = [
    ["Ancient Temple"],
    ["Oil Resevior", "Desert Road", "Hot Springs", "Bandit Camps"],
    ["Ravine", "Badlands", "Mesa"],
    ["Dried River Bed", "Dried Lake Bed"],
    ["Sand pit"]
]
const oceanFeatures = [
    ["Inhabited Island", "Treasure Island"],
    ["Large Island", "Small Island", "Shipping Lane", "Floatsam Island", "Archipelago"],
    ["Hot Plumes", "Underwater Trench", "Shipwreck", "Whirlpool"],
    ["Coral Reef", "Ocean Floor", "Kelp Forest", "Atoll"],
    ["Islets","Deep Sea Trench"]
]
const wastelandFeatures = [
    ["Oasis"],
    ["Oil Resivior", "Skeletal Remains", "Toxic Pits"],
    ["Blightlands", "Lava Fields", "Giant Skeleton"],
    ["Wasteland", "Radioactive Dust"],
    ["Wasteland"]
]

    let ManualChunkList =[]
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
        else if (biomeRoll === 4) {newBiome = 2}
        else if (biomeRoll === 5) {newBiome = 2}  
      }
    else if (baseBiome === 3) {
        if (biomeRoll === 0) {newBiome = 3}
        else if (biomeRoll === 1) {newBiome = 5}
        else if (biomeRoll === 2) {newBiome = 1}
        else if (biomeRoll === 3) {newBiome = 0}
        else if (biomeRoll === 4) {newBiome = 3}
        else if (biomeRoll === 5) {newBiome = 3}
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
            if (currTempOptions !== undefined) {
                temperamentOptions.push(currTempOptions)
            }
        }
        for (let i = -1; i < 2; i = i + 2) {
            if (temperamentArr[y + i] !== undefined) {
                let currTempOptions = temperamentArr[y + i][x]
                if (currTempOptions !== undefined) {
                    temperamentOptions.push(currTempOptions)
                }
            }
        }
       let temperamentRoll = Math.floor(Math.random() * (temperamentOptions.length))
        let newTemperament = temperamentOptions[temperamentRoll]
        return newTemperament
    } else {return lastChunk.temperament}}(lastChunk);
let bome = this.biome
//Feature Selector
    this.features = function featureSelect(biomeID) {
       let numberOfFeatures = Math.floor(Math.random() * 5)
           console.log(`number of features roll was ${numberOfFeatures}`)
           console.log(`the Biome ID is ${biomeID}`)
       let totalFeatures =[]
       
       if (numberOfFeatures >= 1 && numberOfFeatures <= 4) {
        //PLAINS
        if (biomeID === 0) {
            console.log('hit')
            let plainsS = plainsFeatures[0]
            let plainsA = plainsFeatures[1]
            let plainsB = plainsFeatures[2]
            let plainsC = plainsFeatures[3]
            let plainsF = plainsFeatures[4]
            for (let j = 0; j < numberOfFeatures; j++){
                    let rarityRoll = Math.ceil(Math.random() * 101)
                    if (rarityRoll >= 1 && rarityRoll <= 49) {
                        let featureRoll = Math.ceil(Math.random() * plainsF.length -1) 
                        totalFeatures.push(plainsF[featureRoll])
                    } else if (rarityRoll >= 50 && rarityRoll <= 73) {
                        let featureRoll = Math.ceil(Math.random() * plainsC.length -1) 
                        totalFeatures.push(plainsC[featureRoll])
                    } else if (rarityRoll >= 74 && rarityRoll <= 87) {
                        let featureRoll = Math.ceil(Math.random() * plainsB.length -1) 
                        totalFeatures.push(plainsB[featureRoll])
                    } else if (rarityRoll >= 88 && rarityRoll <= 96) {
                        let featureRoll = Math.ceil(Math.random() * plainsA.length -1) 
                        totalFeatures.push(plainsA[featureRoll])
                    } else if (rarityRoll >= 97 && rarityRoll <= 101) {
                        let featureRoll = Math.ceil(Math.random() * plainsS.length -1) 
                       
                        totalFeatures.push(plainsS[featureRoll])
                    }
                }
                //HILLS
            } else if (biomeID === 1) {
                console.log('hit')
                    let hillsS = hillsFeatures[0]
                    let hillsA = hillsFeatures[1]
                    let hillsB = hillsFeatures[2]
                    let hillsC = hillsFeatures[3]
                    let hillsF = hillsFeatures[4]
                    for (let j = 0; j < numberOfFeatures; j++){
                            let rarityRoll = Math.ceil(Math.random() * 101)
                            if (rarityRoll >= 1 && rarityRoll <= 49) {
                                let featureRoll = Math.ceil(Math.random() * hillsF.length -1) 
                                totalFeatures.push(hillsF[featureRoll])
                            } 
                            else if (rarityRoll >= 50 && rarityRoll <= 73) {
                                let featureRoll = Math.ceil(Math.random() * hillsC.length -1) 
                                totalFeatures.push(hillsC[featureRoll])
                            } 
                            else if (rarityRoll >= 74 && rarityRoll <= 87) {
                                let featureRoll = Math.ceil(Math.random() * hillsB.length -1) 
                                totalFeatures.push(hillsB[featureRoll])
                            } 
                            else if (rarityRoll >= 88 && rarityRoll <= 96) {
                                let featureRoll = Math.ceil(Math.random() * hillsA.length -1) 
                                totalFeatures.push(hillsA[featureRoll])
                            } 
                            else if (rarityRoll >= 97 && rarityRoll <= 101) {
                                let featureRoll = Math.ceil(Math.random() * hillsS.length -1) 
                               totalFeatures.push(hillsS[featureRoll])
                            }
                        }
                     }    
            
            else if (biomeID === 2) {
                console.log('hit')
                    let mountainS = mountainFeatures[0]
                    let mountainA = mountainFeatures[1]
                    let mountainB = mountainFeatures[2]
                    let mountainC = mountainFeatures[3]
                    let mountainF = mountainFeatures[4]
                    for (let j = 0; j < numberOfFeatures; j++){
                            let rarityRoll = Math.ceil(Math.random() * 101)
                            if (rarityRoll >= 1 && rarityRoll <= 49) {
                                let featureRoll = Math.ceil(Math.random() * mountainF.length -1) 
                                totalFeatures.push(mountainF[featureRoll])
                            } else if (rarityRoll >= 50 && rarityRoll <= 73) {
                                let featureRoll = Math.ceil(Math.random() * mountainC.length -1) 
                                totalFeatures.push(mountainC[featureRoll])
                            } else if (rarityRoll >= 74 && rarityRoll <= 87) {
                                let featureRoll = Math.ceil(Math.random() * mountainB.length -1) 
                                totalFeatures.push(mountainB[featureRoll])
                            } else if (rarityRoll >= 88 && rarityRoll <= 96) {
                                let featureRoll = Math.ceil(Math.random() * mountainA.length -1) 
                                totalFeatures.push(mountainA[featureRoll])
                            } else if (rarityRoll >= 97 && rarityRoll <= 101) {
                                let featureRoll = Math.ceil(Math.random() * mountainS.length -1) 
                                totalFeatures.push(mountainS[featureRoll])
            }}}
            else if (biomeID === 3) {
                console.log('hit')
                    let forestS = forestFeatures[0]
                    let forestA = forestFeatures[1]
                    let forestB = forestFeatures[2]
                    let forestC = forestFeatures[3]
                    let forestF = forestFeatures[4]
                    for (let j = 0; j < numberOfFeatures; j++){
                            let rarityRoll = Math.ceil(Math.random() * 101)
                            
                            if (rarityRoll >= 1 && rarityRoll <= 49) {
                                let featureRoll = Math.ceil(Math.random() * forestF.length -1) 
                                totalFeatures.push(forestF[featureRoll])
                            } else if (rarityRoll >= 50 && rarityRoll <= 73) {
                                let featureRoll = Math.ceil(Math.random() * forestC.length -1) 
                                totalFeatures.push(forestC[featureRoll])
                            } else if (rarityRoll >= 74 && rarityRoll <= 87) {
                                let featureRoll = Math.ceil(Math.random() * forestB.length -1) 
                                totalFeatures.push(forestB[featureRoll])
                            } else if (rarityRoll >= 88 && rarityRoll <= 96) {
                                let featureRoll = Math.ceil(Math.random() * forestA.length -1) 
                                totalFeatures.push(forestA[featureRoll])
                            } else if (rarityRoll >= 97 && rarityRoll <= 101) {
                                let featureRoll = Math.ceil(Math.random() * forestS.length -1) 
                                totalFeatures.push(forestS[featureRoll])
                    }}}
                    else if (biomeID === 4) {
                        console.log('hit')
                        let desertS = desertFeatures[0]
                        let desertA = desertFeatures[1]
                        let desertB = desertFeatures[2]
                        let desertc = desertFeatures[3]
                        let desertF = desertFeatures[4]
                        for (let j = 0; j < numberOfFeatures; j++){
                                let rarityRoll = Math.ceil(Math.random() * 101)
                                if (rarityRoll >= 1 && rarityRoll <= 49) {
                                    let featureRoll = Math.ceil(Math.random() * desertF.length -1) 
                                    totalFeatures.push(desertF[featureRoll])
                                } else if (rarityRoll >= 50 && rarityRoll <= 73) {
                                    let featureRoll = Math.ceil(Math.random() * desertc.length -1) 
                                    totalFeatures.push(desertc[featureRoll])
                                } else if (rarityRoll >= 74 && rarityRoll <= 87) {
                                    let featureRoll = Math.ceil(Math.random() * desertB.length -1) 
                                    totalFeatures.push(desertB[featureRoll])
                                } else if (rarityRoll >= 88 && rarityRoll <= 96) {
                                    let featureRoll = Math.ceil(Math.random() * desertA.length -1) 
                                    totalFeatures.push(desertA[featureRoll])
                                } else if (rarityRoll >= 97 && rarityRoll <= 101) {
                                    let featureRoll = Math.ceil(Math.random() * desertS.length -1) 
                                    totalFeatures.push(desertS[featureRoll])
            }}}
            else if (biomeID === 5) {
                console.log('hit')
                let oceanS = oceanFeatures[0]
                let oceanA = oceanFeatures[1]
                let oceanB = oceanFeatures[2]
                let oceanC = oceanFeatures[3]
                let oceanF = oceanFeatures[4]
                for (let j = 0; j < numberOfFeatures; j++){
                        let rarityRoll = Math.ceil(Math.random() * 101)
                        if (rarityRoll >= 1 && rarityRoll <= 49) {
                            let featureRoll = Math.ceil(Math.random() * oceanF.length -1) 
                            totalFeatures.push(oceanF[featureRoll])
                        } else if (rarityRoll >= 50 && rarityRoll <= 73) {
                            let featureRoll = Math.ceil(Math.random() * oceanC.length -1) 
                            totalFeatures.push(oceanC[featureRoll])
                        } else if (rarityRoll >= 74 && rarityRoll <= 87) {
                            let featureRoll = Math.ceil(Math.random() * oceanB.length -1) 
                            totalFeatures.push(oceanB[featureRoll])
                        } else if (rarityRoll >= 88 && rarityRoll <= 96) {
                            let featureRoll = Math.ceil(Math.random() * oceanA.length -1) 
                            totalFeatures.push(oceanA[featureRoll])
                        } else if (rarityRoll >= 97 && rarityRoll <= 101) {
                            let featureRoll = Math.ceil(Math.random() * oceanS.length -1) 
                            totalFeatures.push(oceanS[featureRoll])
            }}}
            else if (biomeID === 6) {
                console.log('hit')
                let wastelandS = wastelandFeatures[0]
                let WastelandA = wastelandFeatures[1]
                let wastelandB = wastelandFeatures[2]
                let wastelandC = wastelandFeatures[3]
                let wastelandF = wastelandFeatures[4]
                for (let j = 0; j < numberOfFeatures; j++){
                        let rarityRoll = Math.ceil(Math.random() * 101)
                        if (rarityRoll >= 1 && rarityRoll <= 49) {
                            let featureRoll = Math.ceil(Math.random() * wastelandF.length -1) 
                            totalFeatures.push(wastelandF[featureRoll])
                        } else if (rarityRoll >= 50 && rarityRoll <= 73) {
                            let featureRoll = Math.ceil(Math.random() * wastelandC.length -1) 
                            totalFeatures.push(wastelandC[featureRoll])
                        } else if (rarityRoll >= 74 && rarityRoll <= 87) {
                            let featureRoll = Math.ceil(Math.random() * wastelandB.length -1) 
                            totalFeatures.push(wastelandB[featureRoll])
                        } else if (rarityRoll >= 88 && rarityRoll <= 96) {
                            let featureRoll = Math.ceil(Math.random() * WastelandA.length -1) 
                            totalFeatures.push(WastelandA[featureRoll])
                        } else if (rarityRoll >= 97 && rarityRoll <= 101) {
                            let featureRoll = Math.ceil(Math.random() * wastelandS.length -1) 
                            totalFeatures.push(wastelandS[featureRoll])
            }}}}
            let answer = totalFeatures.join(", ")
            console.log(`the total features are ${totalFeatures}`)
            console.log(`the answer is ${answer}`)
        return answer
    }
    (lastChunk.biome);
    
//Locale Selector
    this.local = function localSelect () {
        let x = lastChunk.biome
        console.log(x)
        let y = lastChunk.temperament
        console.log(y)
        let newLocal = localList[y][x]
        console.log(newLocal)
        return newLocal
    }(lastChunk);
}}
    
//-------------------------------------

class manualChunk {
    constructor (){
        this.biome = newChunkTemp;
        this.temperament = newChunkTemp;
        this.local = function localSelect () {
                let x = lastChunk.biome
                let y = lastChunk.temperament
                let newLocal = localList[y][x]
                return newLocal
            }(lastChunk);
        }
}

//------------------------------------------------------------------------------------------------------------


//Functions
            function generateNewChunk () {
    let newChunk = new chunk
    chunkList.push(newChunk)
    asdf = chunkList.length - 1
    lastChunk = chunkList[asdf]
    
    const NewChunkDiv = document.createElement('div')
        NewChunkDiv.id = lastChunk.local
        NewChunkDiv.className = "item"
        cc = document.getElementById('chunk-container')
        cc.appendChild(NewChunkDiv)
    
    const par1 = document.createElement('p')
        par1.className = "local"
        NewChunkDiv.appendChild(par1)

    const newContent = document.createTextNode(`${lastChunk.local}`) 
        par1.appendChild(newContent)
    
    const brk = document.createElement('br')
        NewChunkDiv.appendChild(brk)

    const par2 = document.createElement('p')
        par2.className = "featureTitle"
        NewChunkDiv.appendChild(par2)

    const newContent2 = document.createTextNode('Chunk Features:')
        par2.appendChild(newContent2)

    const par3 = document.createElement('p')
        par3.className = "features"
        NewChunkDiv.appendChild(par3)
    
    const newContent3 = document.createTextNode(`${lastChunk.features}`)
        newContent3.className = "words2"
        par3.appendChild(newContent3)
    console.log(chunkList)
}

const generateManualChunk = (e) => {
    e.preventDefault();
    const b = document.getElementById('biome')
    const newChunkBiome = b.value
    const t = document.getElementById('temperament')
    const newChunkTemp = t.value
    let x = [newChunkBiome, newChunkTemp]
    // console.log(x)
    console.log('hit')
    axios.post('/server', x)
        .then(res => {
            res.data.biome = +res.data.biome
            res.data.temperament = +res.data.temperament
            chunkList.push(res.data)
            asdf = chunkList.length - 1
            lastChunk = chunkList[asdf]
            console.log(chunkList) 
            const NewChunkDiv = document.createElement('div')
            NewChunkDiv.id = lastChunk.local
            NewChunkDiv.className = "item"
            cc = document.getElementById('chunk-container')
            cc.appendChild(NewChunkDiv)
            const newContent = document.createTextNode(`${lastChunk.local}`) 
            newContent.id = "words"
            NewChunkDiv.appendChild(newContent)
            
        })
        .catch(err => {
        console.log('axios error:') 
        console.log(err)
        })
}
    
newChunkBtn.addEventListener('click', generateNewChunk)
submitBtn.addEventListener("click", generateManualChunk)