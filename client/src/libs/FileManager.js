const fs = require('fs')
module.exports = {
    createNewFile: (filename) => {
        const fd = fs.openSync(filename, 'w');
    }, 
    saveFileObjectToFile: (obj, filename) => {
        const jsonString = JSON.stringify(obj)
        fs.writeFile(filename, jsonString, 'utf-8', (err, data) => {
            if (err) throw err;
            console.log('Saved: ', filename)
        })
    },
    readJsonObjectFromFile: (filename) => {
        fs.readFile(filename, (err, data) => {
            if (err) throw err
            let jsonObject = JSON.parse(data)
            console.log('jsonObject: ', jsonObject)
        })
    }
}


//     const filename = '../../../configs/conexao.json';    
//     var FileManager = require('../../../libs/FileManager');
//     FileManager.createNewFile(filename)
//     let jsonObject = {dados:'ok'}
//     FileManager.saveFileObjectToFile(jsonObject, filename)
//     FileManager.readJsonObjectFromFile(filename)
