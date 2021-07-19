const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const path = require("path");
const managerQuestion = require("./src/manager-question");
const engineerQuestion = require("./src/engineer-question");
const internQuestion = require("./src/intern-question");
const selectEmployee = require("./src/select-employee");

const team = [];

function init() {
  // function to create a Manager

  function engineer() {
    console.log("engineer sucess");
    inquirer.prompt(engineerQuestion).then((input) => {
      let engineer = new Engineer(
        input.name,
        input.id,
        input.email,
        input.gitHub
      );
      team.push(engineer);
      console.log(team);
      employee();
    });
  }

  function intern() {
    console.log("intern sucess");
    inquirer.prompt(internQuestion).then((input) => {
      let intern = new Intern(input.name, input.id, input.email, input.school);
      team.push(intern);
      console.log(team);
      employee();
    });
  }

  manager();
}

function manager() {
  // prompt user with questions needed to satisfy the input for a manager object
  inquirer.prompt(managerQuestion).then((input) => {
    let manager = new Manager(input.name, input.id, input.email, input.office);
    team.push(manager);
    console.log(team);
    employee();
  });
}

function employee() {
  inquirer.prompt(selectEmployee).then((answer) => {
    if (answer.what == "Engineer") {
      engineer();
    } else if (answer.what == "Intern") {
      intern();
    } else {
      console.log(team);
    }
    () => {
      rendereEmployeeCard(team, __dirname);
      //render html function
    };
  });
}

init();
