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
      renderEmployeeCard(team, __dirname);
    }
  });
}

function engineer() {
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
  inquirer.prompt(internQuestion).then((input) => {
    let intern = new Intern(input.name, input.id, input.email, input.school);
    team.push(intern);
    console.log(team);
    employee();
  });
}

function renderEmployeeCard(team, filePath) {
  var HTML = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" type="text/css" href="style.css" />
  
      <script
        src="https://kit.fontawesome.com/a4b238bebd.js"
        crossorigin="anonymous"
      ></script>
      <title>Document</title>
    </head>
    <body>
      <nav class="navbar-expand-lg bg-warning">
        <h1>My Team</h1>
        
      </nav>
      <!-- start the employee cards -->
      <div class="wrapper-grid">
      
      `;

  team.forEach((employee) => {
    if (employee.role === "Manager") {
      HTML += `
      
    <div class="container col">
      <h4 class="card-header bg-danger">${employee.name}</h4>
      <div class="card-content">
        <div>
          <p class="employee-type"><i class="fas fa-bullhorn"></i> Manager</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${employee.id}</li>
          <li class="list-group-item"><a href="mailto:someone@yoursite.com" target="_blank" rel="noopener noreferrer">${employee.email}</a></li>
          <li class="list-group-item">Office number: ${employee.office}</li>
        </ul>
      </div>
    </div>
      `;
    }
    if (employee.role === "Engineer") {
      HTML += `
      <div class="container col">
      <h4 class="card-header bg-primary">${employee.name}</h4>
      <div class="card-content">
        <div>
          <p class="employee-type">
            <i class="fas fa-user-cog"></i> Engineer
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${employee.id}</li>
          <li class="list-group-item"><a href="mailto:someone@yoursite.com" target="_blank" rel="noopener noreferrer">${employee.email}</a></li>
          <li class="list-group-item">
            <a href="${employee.github}" class="card-link">Github Profile</a>
          </li>
        </ul>
      </div>
    </div>
      `;
    }
    if (employee.role === "Intern") {
      HTML += `
      <div class="container col">
      <h4 class="card-header bg-success">${employee.name}</h4>
      <div class="card-content">
        <div>
          <p class="employee-type">
            <i class="fas fa-university"></i> Student
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${employee.id}</li>
          <li class="list-group-item"><a href="mailto:someone@yoursite.com" target="_blank" rel="noopener noreferrer">${employee.email}</a></li>
          <li class="list-group-item">School: UNC</li>
        </ul>
      </div>
    </div>
      `;
    }
  });
  HTML += `
    </div>
  </body>
</html>
  `;

  writeHTML(HTML, filePath);
}

function writeHTML(html, filePath) {
  const dir = path.join(filePath, "dist");
  fs.mkdir(dir, { recursive: true }, (err) => {
    err ? console.error(err) : process.chdir(dir);
    fs.writeFileSync("team.html", html);
  });
}

init();
