console.log("linked!");
const inquirer = require("inquirer");
const fs = require("fs");
//README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

inquirer
  .prompt([
    { type: "input", name: "title", message: "what is your Project title?" },

    { type: "input", name: "description", message: "what is description" },
    {
      type: "input",
      name: "installation",
      message: "what is installation instructions",
    },
    { type: "input", name: "usage", message: "what is usage information" },
    {
      type: "input",
      name: "contribution",
      message: "what is your contribution guidelines?",
    },
    { type: "input", name: "test", message: "what is your test instruction?" },
    {
      type: "list",
      message: "What is your license?",
      name: "license",
      choices: ["MIT", "ISC", "Unlicense"],
    },
    {
      type: "input",
      name: "username",
      message: "what is your Github username?",
    },

    { type: "input", name: "email", message: "what is your email?" },
  ])
  .then((data) => {
    console.log(data);
    const {
      title,
      description,
      installation,
      usage,
      contribution,
      test,
      license,
      username,
      email,
    } = data;
    let licenseC;
    switch (license) {
      case "MIT":
        licenseC =
          "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      case "ISC":
        licenseC =
          "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
        break;
      case "Boost Software License 1.0":
        licenseC =
          "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
        break;
      default:
        licenseC = "";
    }

    const content = `

`;

    fs.writeFile("index.html", content, (err) =>
      err ? console.log(err) : console.log("Success")
    );
  });
