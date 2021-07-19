// render html file using fs

const fs = require("fs");
const path = require("path");

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
      <div class="wrapper-grid">
    <div class="container col">
      <h4 class="card-header bg-danger">${Employee.name}</h4>
      <div class="card-content">
        <div>
          <p class="employee-type"><i class="fas fa-bullhorn"></i> Manager</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${Employee.id}</li>
          <li class="list-group-item">email: ${Employee.email}</li>
          <li class="list-group-item">Office number: ${Employee.office}</li>
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
          <li class="list-group-item">${employee.email}</li>
          <li class="list-group-item">
            Github: <a href="${employee.github}" class="card-link">Github</a>
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
          <li class="list-group-item">${employee.email}</li>
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

function getExtra(employee) {
  switch (employee.role) {
    case "Manager":
      return `
        <span><i class="fas fa-phone fa-lg"></i></span>
        <span><a href="Office: ${employee.office}">${employee.office}</a></span>
        `;
    case "Engineer":
      return `
        <span><i class="fab fa-github fa-lg"></i></span>
        <span><a href="https://github.com/${employee.github}">github.com/${employee.github}</a></span>
        `;
    case "Intern":
      return `
        <span><i class="fas fa-university fa-lg"></i></span>
        <span>${employee.school}</span>
        `;
  }
}

function getIcon(employee) {
  switch (employee) {
    case "Manager":
      `<i class="fas fa-bullhorn"></i>`;
      return;
    case "Engineer":
      return `<h3>${employee.role} <i class="fas fa-laptop-code fa-lg"></i></h3>`;
    case "Intern":
      return `<h3>${employee.role} <i class="fas fa-user-graduate fa-lg"></i></i></h3>`;
  }
}

function writeHTML(html, filePath) {
  const dir = path.join(filePath, "dist");
  fs.mkdir(dir, { recursive: true }, (err) => {
    err ? console.error(err) : process.chdir(dir);
    fs.writeFileSync("team.html", html);
    fs.writeFileSync("style.css", CSS);
  });
}
