const fs = require("fs");
const path = require("path");

const banksRaw = fs.readFileSync("./data/banks.json", "utf-8");
const banks = JSON.parse(banksRaw);

const methodsRaw = fs.readFileSync("./data/methods.json", "utf-8");
const methods = JSON.parse(methodsRaw);

function generateMethodsTable() {
  return [
    "| Name | Logo | Colors |",
    "| ---- | ---- | ------ |",
    ...methods.map(
      (i) =>
        `| ${i.name} | ![${
          i.name
        } Logo](https://raw.githubusercontent.com/College-Canine/financial/master/logos/method/${
          i.logo
        }) | ${i.colors
          .map(
            (j) =>
              `![${j}](https://placehold.co/15x15/${j.slice(1)}/${j.slice(
                1
              )}.png)`
          )
          .join("")} |`
    ),
  ].join("\n");
}

function generateBankTable() {
  let logo = [];

  return [
    "| Name | Division, Country | Logo | Colors |",
    "| ---- | ----------------- | ---- | ------ |",
    ...banks
      .filter(
        (i, n) =>
          i.logo != undefined && !logo.includes(i.logo) && logo.push(i.logo)
      )
      .filter((i, n) => n < 25)
      .map(
        (i) =>
          `| ${i.name} | ${i.state}, ${i.country} | ![${
            i.name
          } Logo](https://raw.githubusercontent.com/College-Canine/financial/master/logos/bank/${
            i.logo
          }) | ${i.colors
            .filter((i, n) => n < 4)
            .map(
              (j) =>
                `![${j}](https://placehold.co/15x15/${j.slice(1)}/${j.slice(
                  1
                )}.png)`
            )
            .join("")} |`
      ),
  ].join("\n");
}

function generateReadme() {
  return (
    [
      `# Financials`,
      `💰 Logos and metadata for thousands of financial institutions.`,
      `## Banks`,
      generateBankTable(),
      `## Methods`,
      generateMethodsTable(),
      `## Legal Notice`,
      `College Canine does not claim to own any copyrights or trademarks represented in this repository besides the College Canine Logo and Name. All licensing of logos and trademarks should be done with their respective owners.`,
    ].join("\n\n") + "\n"
  );
}

fs.writeFileSync("./readme.md", generateReadme());
