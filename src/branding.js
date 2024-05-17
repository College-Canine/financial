const fs = require('fs')
const path = require('path')

const fileData = fs.readFileSync("banks.json", 'utf-8')
const data = JSON.parse(fileData)

fs.writeFileSync("banks.json", JSON.stringify(data.map(i => {
    
    let colors = []

    if (i.logo != undefined) {

        const logoData = fs.readFileSync("./res/bank/" + i.logo, 'utf-8')
        colors = [...new Set(logoData.match(/\#[a-fA-F0-9]+/g))]

        colors = colors.filter(i => i.length == 7)

    }

    return {
        ...i,
        colors
    }

}), null, 4))