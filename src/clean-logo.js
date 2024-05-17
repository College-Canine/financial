const fs = require('fs')
const path = require('path')

const files = fs.readdirSync("./res/method")

console.log(files)

for (let file of files) {

    const data = fs.readFileSync(path.join("./res/method/", file), 'utf-8')
    fs.writeFileSync(path.join("./res/method/", file), data.replace(`<rect x="0.5" y="0.5" width="69" height="47" rx="5.5" fill="white" stroke="#D9D9D9"/>`, ''))

}
