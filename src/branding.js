const fs = require('fs')
const path = require('path')

const banksRaw = fs.readFileSync("./data/banks.json", 'utf-8')
const banks = JSON.parse(banksRaw)

const methodsRaw = fs.readFileSync("./data/methods.json", 'utf-8')
const methods = JSON.parse(methodsRaw)

fs.writeFileSync("./data/banks.json", JSON.stringify(banks.map(i => {
    
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


fs.writeFileSync("./data/methods.json", JSON.stringify(methods.map(i => {
    
    let colors = []

    if (i.logo != undefined) {

        const logoData = fs.readFileSync("./logos/method/" + i.logo, 'utf-8')
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