const Manager = require('../lib/Manager');

describe("testManager", () => {
    it("should take a string and return a new string with the first letter of each word capitalized", () => {
    //   const str = "capitalize every first word of the string.";
    //   const capitalized = "Capitalize Every First Word Of The String.";

    //   const result = new Algo().capitalize(str);
    const managerTest = new Manager("person",12345,"example@example.com",123)
      expect(managerTest.getRole()).toEqual("Manager");
    });
})