const fs = require('fs')
const path = require('path')

const banksRaw = fs.readFileSync("./data/banks.json", 'utf-8')
const banks = JSON.parse(banksRaw)

function generateBankTable() {

    let logo = []

    return [
        '| Number | Name | Division, Country | Logo | Colors |',
        '| ------ | ---- | ----------------- | ---- | ------ |',
        ...banks.filter((i, n) => i.logo != undefined && !logo.includes(i.logo) && logo.push(i.logo)).map(i => `| ${i.routing} | ${i.long} | ${i.state}, ${i.country} | ![${i.long} Logo](https://raw.githubusercontent.com/College-Canine/financial/master/logos/bank/${i.logo}) | ${i.colors.map(j => `![${j}](https://placehold.co/15x15/${j.slice(1)}/${j.slice(1)}.png)`).join('')}`)
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