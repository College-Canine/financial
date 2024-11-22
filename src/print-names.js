const fs = require("fs");

const banksRaw = fs.readFileSync("./data/banks.json", "utf-8");
const banks = JSON.parse(banksRaw);

(async () => {
  for (let i in banks) {
    const bank = banks[i];

    const name = bank.long;
    let parts = name.split(/[\s\,]+/g);

    // console.log(parts);

    // Make lowercase
    parts = parts.map((i) => i[0]?.toUpperCase() + i.slice(1).toLowerCase());

    // Remove Parts
    parts = parts.filter(
      (i) =>
        i.toUpperCase() != "NA" &&
        i.toUpperCase() != "N/A" &&
        i.toUpperCase() != "N.A."
    );
    parts = parts.filter(
      (i) => i.toUpperCase() != "CO" && i.toUpperCase() != "CO."
    );

    // Convert Shortened Names to Full
    parts = parts.map((i) => (i.toUpperCase() == "BK" ? "Bank" : i));
    parts = parts.map((i) => (i.toUpperCase() == "BK." ? "Bank" : i));
    parts = parts.map((i) => (i.toUpperCase() == "TR" ? "Trust" : i));
    parts = parts.map((i) => (i.toUpperCase() == "TR." ? "Trust" : i));
    parts = parts.map((i) => (i.toUpperCase() == "NAT" ? "National" : i));
    parts = parts.map((i) => (i.toUpperCase() == "NAT." ? "National" : i));
    parts = parts.map((i) => (i.toUpperCase() == "TREAS" ? "Treasury" : i));
    parts = parts.map((i) => (i.toUpperCase() == "FED." ? "Federal" : i));
    parts = parts.map((i) => (i.toUpperCase() == "FED" ? "Federal" : i));
    parts = parts.map((i) => (i.toUpperCase() == "MORT" ? "Mortgage" : i));
    parts = parts.map((i) => (i.toUpperCase() == "MORT." ? "Mortgage" : i));
    parts = parts.map((i) => (i.toUpperCase() == "MTG" ? "Mortgage" : i));
    parts = parts.map((i) => (i.toUpperCase() == "MTG." ? "Mortgage" : i));
    parts = parts.map((i) => (i.toUpperCase() == "MORTG" ? "Mortgage" : i));
    parts = parts.map((i) => (i.toUpperCase() == "MORTG." ? "Mortgage" : i));
    parts = parts.map((i) => (i.toUpperCase() == "ACCT" ? "Account" : i));
    parts = parts.map((i) => (i.toUpperCase() == "ACCT." ? "Account" : i));
    parts = parts.map((i) => (i.toUpperCase() == "GEN" ? "General" : i));
    parts = parts.map((i) => (i.toUpperCase() == "GEN." ? "General" : i));
    parts = parts.map((i) => (i.toUpperCase() == "CORP" ? "Corporation" : i));
    parts = parts.map((i) => (i.toUpperCase() == "CORP." ? "Corporation" : i));
    parts = parts.map((i) => (i.toUpperCase() == "U.S." ? "United States" : i));
    parts = parts.map((i) =>
      i.toUpperCase() == "P&I" ? "Principal and Interest" : i
    );
    parts = parts.map((i) =>
      i.toUpperCase() == "PI" ? "Principal and Interest" : i
    );

    // Edge Cases
    parts = parts.map((i) => (i.toUpperCase() == "TD" ? "TD" : i));
    parts = parts.map((i) => (i.toUpperCase() == "NBT" ? "NBT" : i));
    parts = parts.map((i) => (i.toUpperCase() == "TCF" ? "TCF" : i));
    parts = parts.map((i) => (i.toUpperCase() == "JPMORGAN" ? "JP-Morgan" : i));
    parts = parts.map((i) => (i.toUpperCase() == "USA" ? "USA" : i));
    parts = parts.map((i) => (i.toUpperCase() == "HSBC" ? "HSBC" : i));
    parts = parts.map((i) => (i.toUpperCase() == "NYC" ? "NYC" : i));
    parts = parts.map((i) => (i.toUpperCase() == "II" ? "II" : i));
    parts = parts.map((i) => (i.toUpperCase() == "III" ? "III" : i));

    // Trim Edges
    let final = parts.join(" ");
    final = final.replace(/^\,+|\,+$/g, ""); // commas
    final = final.replace(/^\.+|\.+$/g, ""); // commas

    banks[i].name = final;
  }

  fs.writeFileSync("./data/banks.json", JSON.stringify(banks, null, 4));
})();
