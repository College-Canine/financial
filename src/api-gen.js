const fs = require("fs");

const banksRaw = fs.readFileSync("./data/banks.json", "utf-8");
const banks = JSON.parse(banksRaw);

(async () => {
  for (let i in banks) {
    const bank = banks[i];

    if (bank.name == undefined) continue;
    if (bank.logo == undefined) continue;
    if (bank.website == undefined) continue;
    if (bank.colors == undefined) continue;
    if (bank.routing == undefined) continue;
    if (bank.transfer == undefined) continue;
    if (bank.settlement == undefined) continue;

    fs.writeFileSync(
      `./api/banks/${bank.routing}.json`,
      JSON.stringify(bank, null, 4)
    );
  }
})();
