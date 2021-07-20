const Intern = require("../lib/intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("returns an object that is an instance of the Intern class when called with the new keyword", () => {
      const intern = new Intern();
      expect(intern instanceof Intern).toBe(true);
    });
    it("it sets the school property based on constructor argument", () => {
      const school = "UNC";
      const intern = new Intern("Connor", 55, "con@gmail.com", school);
      expect(intern.school).toBe(school);
    });
  });

  describe("getSchool", () => {
    it("returns the school property when the getSchool() method is called", () => {
      const school = "University of Mary Washington";
      const intern = new Intern("Connor", 55, "con@gmail.com", school);
      expect(intern.getSchool()).toBe(school);
    });
  });

  describe("getRole", () => {
    it("returns 'Intern' when the getRole() method is called", () => {
      const intern = new Intern();
      expect(intern.getRole()).toBe("Intern");
    });
  });
});
