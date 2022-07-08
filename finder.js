
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

let answerArr = []

function finder (localList){
    for (i = 0; i < localList.length; i++){
        
        let arr1 = localList[i]
        let arr2 = localList[i + 1]
        for (y = 0; y < arr1.length; y++) {
            for (z = 0; z < arr1.length; z++){
            if (arr1[y] === arr2[z]) {
                arr1.splice(y,1)
                arr2.splice(z,1)
            }
        }
    }
    
        for (y = 0; y < arr1.length; y++) {
          for (z = 0; z < arr1.length; z++){
            if (arr1[y] === arr1[z]) {
                arr1.splice(y,1)
                
            }
        }
    }
    
        for (y = 0; y < arr2.length; y++) {
         for (z = 0; z < arr2.length; z++){
            if (arr2[y] === arr2[z]) {
                arr2.splice(z,1)
            }
        }
    }
answerArr.push(arr1)
answerArr.push(arr2)
}
}

finder(localList)
console.log(answerArr)
