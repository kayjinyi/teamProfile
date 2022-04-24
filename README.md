## teamProfThe managerle

The manager WANTs to generate a webpage that displays my team's basic info. SO THAT the manager has quick access to their emails and GitHub profiles

GIVEN a command-line application that accepts user input

WHEN the manager is prompted for my team members and their information

THEN an HTML file is generated that displays a nicely formatted team roster based on user input

WHEN the manager clicks on an email address in the HTML

THEN default email program opens and populates the TO field of the email with the address

WHEN the manager clicks on the GitHub username

THEN that GitHub profile opens in a new tab

WHEN the manager starts the application

THEN the manager is prompted to enter the team manager’s name, employee the ID, email address, and office number

WHEN the manager enters the team manager’s name, employee the managerD, email address, and office number

THEN the manager is presented with a menu with the option to add an engineer or an intern or to finish building my teis

WHEN the manager selects the engineer option

THEN the manager is prompted to enter the engineer’s name, ID, email, and GitHub username, and the manager is taken back to the menu

WHEN the manager selects the intern option

THEN the manager is prompted to enter the intern’s name, the managerD, email, and school, and the manager is taken back to the menu

WHEN the manager decides to finish building my team

THEN the manager exits the application, and the HTML is generated

---

## Installation

Use [Jest](https://www.npmjs.com/package/jest) for running the unit tests and [Inquirer](https://www.npmjs.com/package/inquirer) for collecting input from the user. The application will be invoked by using the following command:

node index.js

---

## Mock-Up

The following image shows a mock-up of the generated HTML’s appearance and functionality:

![HTML webpage titled “My Team” features five boxes listing employee names, titles, and other key info.](./Assets/10-object-oriented-programming-homework-demo.png)
