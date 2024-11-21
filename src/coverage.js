const fs = require("fs");
const path = require("path");
const banksRaw = fs.readFileSync("../data/banks.json", "utf-8");
const banks = JSON.parse(banksRaw);

let count = 0;
let total = 0;

for (let i in banks) {
  const bank = banks[i];

  if (bank.website != undefined) {
    count++;
  }
  total++;
}

console.log(
  count + "/" + total + " = " + ((100 * count) / total).toFixed(2) + "%"
);
