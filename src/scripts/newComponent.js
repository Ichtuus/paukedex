#! /usr/bin/env node
const utils = require("./utils");
const fs = require("fs-extra");
const path = require("path");
const { exec } = require("child_process");

const myArgs = process.argv.slice(2);
const nameComponent = myArgs[0];

const kebabNameComponent = utils.kebabCase(nameComponent);
const pascalNameComponent = utils.pascalCase(nameComponent);
const camelNameComponent = utils.camelCase(nameComponent);

const regexNameComponent = /{{cmpName}}/gm;
const regexNameComponentPascalCase = /{{cmpNamePascalCase}}/gm;
const regexNameComponentCamelCase = /{{cmpNameCamelCase}}/gm;

const componentsDir = `./src/components/${kebabNameComponent}`;

if (nameComponent) {
  // create a folder for the component class, css, and template
  fs.mkdirSync(componentsDir);

  //////////
  // READ //
  //////////
  console.log(path.resolve(__dirname));
  // read the class template
  let classTemplate = fs.readFileSync(
    `${__dirname}/templates/componentClass.template`,
    "utf8"
  );

  classTemplate = classTemplate
    .replace(regexNameComponent, kebabNameComponent)
    .replace(regexNameComponentPascalCase, pascalNameComponent);

  // read the html template
  let htmlTemplate = fs.readFileSync(
    `${__dirname}/templates/componentHTML.template`,
    "utf8"
  );
  htmlTemplate = htmlTemplate.replace(regexNameComponent, kebabNameComponent);

  ///////////
  // WRITE //
  ///////////

  // ts file
  fs.writeFileSync(
    `${componentsDir}/${kebabNameComponent}.ts`,
    classTemplate,
    function (err) {
      if (err) return console.log(err);
    }
  );
  console.log(`Created ${componentsDir}/${kebabNameComponent}.ts`);

  // html file
  fs.writeFileSync(
    `${componentsDir}/${kebabNameComponent}.html`,
    htmlTemplate,
    function (err) {
      if (err) return console.log(err);
    }
  );
  console.log(`Created ${componentsDir}/${kebabNameComponent}.html`);

  // scss file
  fs.writeFileSync(
    `${componentsDir}/_${kebabNameComponent}.module.scss`,
    "",
    function (err) {
      if (err) return console.log(err);
    }
  );
  console.log(`Created ${componentsDir}/${kebabNameComponent}.module.scss`);

  // update index.ts
  let index = fs.readFileSync("./src/index.ts", "utf8");

  // find last wrap
  let lastWrapPositionEnd = index.indexOf("customElements");
  lastWrapPositionEnd =
    lastWrapPositionEnd === -1 ? index.length : lastWrapPositionEnd;
  const customElementsArr = index.match(
    /customElements.define['a-zA-Z0-9-, ()=>.\/]*;\n?/g
  );

  if (customElementsArr) {
    customElementsArr.forEach((item, offset) => {
      lastWrapPositionEnd += item.length;
    });
  }

  // insert wrap function for dynamic import
  const wrapDynamicImport = `customElements.define(\'${kebabNameComponent}\', wrap(()=>import(\'./components/${kebabNameComponent}/${kebabNameComponent}\'), \'${pascalNameComponent}\', observedAttributes));\n`;
  index =
    index.slice(0, lastWrapPositionEnd) +
    wrapDynamicImport +
    index.slice(lastWrapPositionEnd);

  // insert wrap function for dynamic import
  fs.writeFileSync("./src/index.ts", index, function (err) {
    if (err) return console.log(err);
  });
  console.log(`Imported ${kebabNameComponent} to index.ts`);

  // GIT ADD
  // exec(`git add ${componentsDir}`, (error, stdout, stderr) => {
  //   if (error) {
  //     console.log(`error: ${error.message}`);
  //     return;
  //   }
  //   if (stderr) {
  //     console.log(`stderr: ${stderr}`);
  //     return;
  //   }
  //   console.log(`Added ${kebabNameComponent} components to git`);
  // });
} else {
  console.error("No component's name");
}
