const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("returns an object that is an instance of the Engineer class when called with the new keyword", () => {
      const engineer = new Engineer();
      expect(engineer instanceof Engineer).toBe(true);
    });
    it("it sets the github property based on constructor argument", () => {
      const github = "githubaddress";
      const engineer = new Engineer("Aaron", 22, "aaron@email.com", github);
      expect(engineer.github).toBe(github);
    });
  });

  describe("getgithub", () => {
    it("returns the name property when the getgithub() method is called", () => {
      const github = "consgithub";
      const engineer = new Engineer("Connor", 11, "con@gmail.com", github);
      expect(engineer.getGithub()).toBe(github);
    });
  });

  describe("getRole", () => {
    it("returns 'Engineer' when the getRole() method is called", () => {
      const engineer = new Engineer();
      expect(engineer.getRole()).toBe("Engineer");
    });
  });
});
