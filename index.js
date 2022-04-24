const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const fs = require("fs");
const manager = new Manager();
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const engineer = [];
const intern = [];
const teamBuilt = require("./util/generateHtml")((manager, engineer, intern));

function askQuestion() {
  inquirer
    //prompted to enter the team manager’s name, employee ID, email address, and office number
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "what is your Manager's name?",
      },
      {
        type: "input",
        name: "managerID",
        message: "what is your Manager's ID",
      },

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
        type: "list",
        message: "Which type of team member would you like to add",
        name: "typeOfTeam",
        choices: ["engineer", "intern", "finish building"],
      },
    ])
    .then((data) => {
      manager.name = data.managerName;
      manager.id = data.managerID;
      manager.email = data.managerEmail;
      manager.officeNumber = data.managerOffice;
      //Could I use decontruct ??
      console.log(manager);
      switch (data.typeOfTeam) {
        case "engineer":
          addEngineer();
          break;
        case "intern":
          addIntern();
          break;
        default:
          console.log("Your team is built");
          break;
      }
    });
}
//How to Dry moreTeam
function moreTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Which type of team member would you like to add",
        name: "typeOfTeam",
        choices: ["engineer", "intern", "finish building"],
      },
    ])
    .then((data) => {
      switch (data.typeOfTeam) {
        case "engineer":
          addEngineer();
          break;
        case "intern":
          addIntern();
          break;
        default:
          console.log("Your team is built");
          break;
      }
    });
}

function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "what is your engineer's name?",
      },
      {
        type: "input",
        name: "engineerID",
        message: "what is your engineer's ID",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "what is your engineer's email",
      },
      {
        type: "input",
        name: "github",
        message: "what is your github username",
      },
    ])
    .then((answers) => {
      const engineerOne = new Engineer(
        answers.engineerName,
        answers.engineerID,
        answers.engineerEmail,
        answers.github
      );
      engineer.push(engineerOne);
      console.log(engineer);
      moreTeam();
    });
}
function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "what is your intern's name?",
      },
      {
        type: "input",
        name: "internID",
        message: "what is your intern's ID",
      },
      {
        type: "input",
        name: "internEmail",
        message: "what is your intern's email",
      },
      {
        type: "input",
        name: "school",
        message: "what is your school",
      },
    ])
    .then((answers) => {
      const internOne = new Intern(
        answers.internName,
        answers.internID,
        answers.internEmail,
        answers.school
      );
      intern.push(internOne);
      console.log(intern);
      moreTeam();
    });
}
askQuestion();
fs.writeFile("index.html", teamBuilt, (err) =>
  err ? console.log(err) : console.log("Success")
);

// const { exit } = require("process");
