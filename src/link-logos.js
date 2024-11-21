const fs = require('fs')
const path = require('path')

const banksRaw = fs.readFileSync("./data/banks.json", 'utf-8')
const banks = JSON.parse(banksRaw)

let output = {}

banks.forEach(i => {
    
    if (i.logo != undefined) {

        output[i.routing] = i.logo;
        
    }

})

fs.writeFileSync("./data/logos.json", JSON.stringify(output))
