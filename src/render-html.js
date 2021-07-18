// render html file using fs

const fs = require("fs");
const path = require("path");

function renderEmployeeCard(x, filePath) {
  var HTML = ``;

  x.forEach((Employee) => {
    HTML += ``;
  });
  HTML += `</div>
  </body>
  </html>`;

  writeHTML(HTML, filePath);
}

function getExtra(employee) {
  switch (employee.role) {
    case "Manager":
      return `
        <span><i class="fas fa-phone fa-lg"></i></span>
        <span><a href="tel:+${employee.office}">${employee.office}</a></span>
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
  switch (employee.role) {
    case "Manager":
      return `<h3>${employee.role} <i class="fas fa-user-secret fa-lg"></i></h3>`;
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
