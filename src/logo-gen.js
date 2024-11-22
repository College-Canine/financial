var pixels = require("image-pixels");
const tracerjs = require("imagetracerjs");
const fs = require("fs");

const banksRaw = fs.readFileSync("../data/banks.json", "utf-8");
const banks = JSON.parse(banksRaw);

(async () => {
  for (let i in banks) {
    try {
      const bank = banks[i];

      if (bank.logo == undefined && bank.website != undefined) {
        var inputImage = await pixels(
          "https://logo.clearbit.com/" + new URL(bank.website).hostname
        );
        const traced = tracerjs.imagedataToSVG(inputImage, "detailed");

        const sldParts = new URL(bank.website).hostname.split(".");
        const sld = sldParts[sldParts.length - 2];

        fs.writeFileSync("../logos/bank/" + sld + ".svg", traced);

        banks[i].logo = sld + ".svg";
        fs.writeFileSync("../data/banks.json", JSON.stringify(banks, null, 4));
      }
    } catch (e) {
      const bank = banks[i];

      console.log(bank.website);
      console.log(e);
    }
  }
})();
