const fs = require('fs')
const path = require('path')

const banksRaw = fs.readFileSync("./data/banks.json", 'utf-8')
const banks = JSON.parse(banksRaw)

function generateBankTable() {

    return [
        '| Number | Name | Division, Country | Logo |',
        '| ------ | ---- | ----------------- | ---- |',
        ...banks.filter((i, n) => i.logo != undefined).map(i => `| ${i.routing} | ${i.long} | ${i.state}, ${i.country} | ![${i.long} Logo](https://raw.githubusercontent.com/College-Canine/financial/master/logos/bank/${i.logo})`)
    ].join('\n')

}

function generateReadme() {

    return [
        `# Financials`,
        `💰 Logos and metadata for thousands of financial institutions.`,
        `## Methods`,
        `## Banks`,
        generateBankTable()
    ].join('\n\n') + '\n'

}

fs.writeFileSync('./readme.md', generateReadme())