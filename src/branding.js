const fs = require('fs')
const path = require('path')

const fileData = fs.readFileSync("./data/banks.json", 'utf-8')
const data = JSON.parse(fileData)

fs.writeFileSync("./data/banks.json", JSON.stringify(data.map(i => {
    
    let colors = []

    if (i.logo != undefined) {

        const logoData = fs.readFileSync("./logos/bank/" + i.logo, 'utf-8')
        colors = [
            ...new Set(logoData.match(/\#[a-fA-F0-9]+/g)), 
            ...new Set(logoData.match("white")), 
            ...new Set(logoData.match("black")), 
        ]

        colors = colors.filter(i => i.length == 7)

    }

    return {
        ...i,
        colors
    }

}), null, 4))