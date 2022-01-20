const Intern = require('../lib/Intern');

describe("testIntern", () => {
    it("should take a string and return a new string with the first letter of each word capitalized", () => {
    //   const str = "capitalize every first word of the string.";
    //   const capitalized = "Capitalize Every First Word Of The String.";

    //   const result = new Algo().capitalize(str);
    const internTest = new Intern("person",12345,"example@example.com","MLTHS")
      expect(internTest.getRole()).toEqual("Intern");
    });
})