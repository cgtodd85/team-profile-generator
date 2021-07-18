const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const path = require("path");
const managerQuestion = require("./src/manager-question");
const engineerQuestion = require("./src/engineer-question");
const internQuestions = require("./src/intern-question");
const selectEmployee = require("./src/select-employee");

const team = [];
