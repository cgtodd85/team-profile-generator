const Manager = require("../lib/manager");

describe("Manager", () => {
  it("should create a new object with a name, role, id number, email address, office number", () => {
    const manager = new Manager(
      "Alec Baldwin",
      "Manager",
      1,
      "alec@baldwins.net",
      10
    );
    expect(manager.name).toEqual("Alec Baldwin");
    expect(manager.role).toEqual("Manager");
    expect(manager.id).toEqual(1);
    expect(manager.email).toEqual("alec@baldwins.net");
    expect(manager.office).toEqual(10);
  });
  it("should have methods getName, getRole, getId, getEmail, getOffice", () => {
    const manager = new Manager(
      "Alec Baldwin",
      "Manager",
      1,
      "alec@baldwins.net",
      10
    );
    expect(manager.getName).toBeDefined();
    expect(manager.getRole).toBeDefined();
    expect(manager.getId).toBeDefined();
    expect(manager.getEmail).toBeDefined();
    expect(manager.getOffice).toBeDefined();
  });
});
