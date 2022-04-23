console.log("linked!");
const inquirer = require("inquirer");
const fs = require("fs");
const { exit } = require("process");
//prompted to enter the team manager’s name, employee ID, email address, and office number
inquirer
  .prompt([
    {
      type: "input",
      name: "managerName",
      message: "what is your Manager's name?",
    },

    { type: "input", name: "managerID", message: "what is your Manager's ID" },

    {
      type: "input",
      name: "managerEmail",
      message: "what is your Manager's email",
    },
    {
      type: "input",
      name: "managerOffice",
      message: "what is your Manager's office number",
    },
    {
      type: "choices",
      name: "contribution",
      message: "what is your contribution guidelines?",
    },
    {
      type: "list",
      message: "Which type of team member would you like to add",
      name: "typeOfTeam",
      choices: ["engineer", "intern", "finish building"],
    },
  ])
  .then((data) => {
    console.log(data);
    // switch (data.typeOfTeam) {
    //   case "engineer":
    //     addEngineer();
    //     break;
    //   case "intern":
    //     addIntern();
    //     break;
    //   case "finish building":
    //    exit();
    //     break;
    //   default:
    //     break;
    // }

    const content = `
${data.managerEmail}
`;

    fs.writeFile("./dist/index.html", content, (err) =>
      err ? console.log(err) : console.log("Success")
    );
  });
