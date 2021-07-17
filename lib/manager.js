//name, employee ID, email address, and office number
//  getName getId getEmail getOffice getRole-override to be 'manager'

const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, office) {
    super(name, id, email, "Manager");
    this.office = office;
  }
  getOffice() {
    return this.office;
  }
}

module.exports = Manager;
