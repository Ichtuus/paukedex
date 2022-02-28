#! /usr/bin/env node
const { cp } = require("fs-extra");
const fs = require("fs-extra");

// source to scan
let pokeapi = fs.readFileSync("./src/types/pokeapi.ts", "utf8");

// exemple
const regex = /export type(.*?)= {};/gm;
let m;

while ((m = regex.exec(pokeapi)) !== null) {
  // This is necessary to avoid infinite loops with zero-width matches
  if (m.index === regex.lastIndex) {
    regex.lastIndex++;
  }
  // output template
  let newPokeTypeTemplate = fs.readFileSync(
    "./src/core/scripts/templates/newPokeType.template",
    "utf8"
  );

  let newFileName = m[1].trim().charAt(0).toUpperCase() + m[1].slice(2);
  const pathToNewFile = `./src/types/pokeapi/${newFileName}.d.ts`
    .replace(/\s/g, "")
    .trim();

  console.log(newFileName);
  newPokeTypeTemplate = newPokeTypeTemplate.replace(
    /{{newPokeType}}/gm,
    newFileName
  );

  // // insert new type file
  fs.writeFileSync(pathToNewFile, newPokeTypeTemplate, (err) => {
    if (err) return console.log(err);
  });
  console.log(`Needed file --- ${newFileName}.d.ts --- type are created`);
}
