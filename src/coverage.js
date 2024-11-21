const fs = require("fs");
const path = require("path");
const google = require("buscar.io");
const banksRaw = fs.readFileSync("../data/banks.json", "utf-8");
const banks = JSON.parse(banksRaw);

(async () => {
  for (let i in banks) {
    const bank = banks[i];

    if (bank.website == undefined) {
      const options = {
        page: 0,
        safe: false,
        parse_ads: false,
        additional_params: {
          hl: "en",
        },
      };

      const response = await google.search(
        bank.long.toLowerCase() + " " + bank.city.toLowerCase(),
        options
      );
      console.log(response);

      let tempSite = response.results.filter((i) => !i.is_sponsored)[0]?.url;

      if (tempSite != undefined)
        tempSite = `https://${new URL(tempSite).hostname}`;

      banks[i].website = tempSite;
      fs.writeFileSync("../data/banks.json", JSON.stringify(banks, null, 4));

      return;
    }
  }
})();

// let count = 0;
// let total = 0;

// console.log(
//   count + "/" + total + " = " + ((100 * count) / total).toFixed(2) + "%"
// );
