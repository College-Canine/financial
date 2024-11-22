const fs = require("fs");
const path = require("path");
const banksRaw = fs.readFileSync("../data/banks.json", "utf-8");
const banks = JSON.parse(banksRaw);

let website = 0;
let logo = 0;
let total = 0;

for (let i in banks) {
  const bank = banks[i];

  if (bank.website != undefined) {
    website++;
  }
  if (bank.logo != undefined) {
    logo++;
  }
  total++;
}

console.log(
  "Website: " +
    website +
    "/" +
    total +
    " = " +
    ((100 * website) / total).toFixed(2) +
    "%"
);

console.log(
  "Logo: " +
    logo +
    "/" +
    total +
    " = " +
    ((100 * logo) / total).toFixed(2) +
    "%"
);
