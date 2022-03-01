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

const regexNameComponentPascalCase = /{{cmpNamePascalCase}}/gm;
const regexNameComponentCamelCase = /{{cmpNameCamelCase}}/gm;
const regexNameComponentKebabCase = /{{cmpNamekebabCase}}/gm;

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
    .replace(regexNameComponentCamelCase, camelNameComponent)
    .replace(regexNameComponentKebabCase, kebabNameComponent)
    .replace(regexNameComponentPascalCase, pascalNameComponent);

  // read the css template
  let cssTemplate = fs.readFileSync(
    `${__dirname}/templates/componentCss.template`,
    "utf8"
  );
  cssTemplate = cssTemplate.replace(
    regexNameComponentCamelCase,
    camelNameComponent
  );
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

  // css file
  fs.writeFileSync(
    `${componentsDir}/${kebabNameComponent}.css.ts`,
    cssTemplate,
    function (err) {
      if (err) return console.log(err);
    }
  );
  console.log(`Created ${componentsDir}/${kebabNameComponent}.module.scss`);
} else {
  console.error("No component's name");
}
