const Manager = require("../lib/manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("returns an object that is an instance of the Manager class when called with the new keyword", () => {
      const manager = new Manager();
      expect(manager instanceof Manager).toBe(true);
    });

    it("it sets the office number property based on constructor argument", () => {
      const office = "4B";
      const manager = new Manager("Connor", 111, "connor@gmail.com", office);
      expect(manager.office).toBe(office);
    });
  });

  describe("getRole", () => {
    it("returns 'Manager' when the getRole() method is called", () => {
      const manager = new Manager();
      expect(manager.getRole()).toBe("Manager");
    });
  });
});
