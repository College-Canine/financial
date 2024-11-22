var pixels = require("image-pixels");
const tracerjs = require("imagetracerjs");
const fs = require("fs");

const banksRaw = fs.readFileSync("./data/banks.json", "utf-8");
const banks = JSON.parse(banksRaw);

(async () => {
  for (let i of banks) {
    if (i.logo == undefined && i.website != undefined) {
      var inputImage = await pixels("https://logo.clearbit.com/yahoo.com");
      const traced = tracerjs.imagedataToSVG(inputImage, "detailed");
      console.log(traced);
    }
  }
})();
