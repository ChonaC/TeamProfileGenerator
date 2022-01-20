const Engineer = require('../lib/Engineer');

describe("testEngineer", () => {
    it("should take a string and return a new string with the first letter of each word capitalized", () => {
    //   const str = "capitalize every first word of the string.";
    //   const capitalized = "Capitalize Every First Word Of The String.";

    //   const result = new Algo().capitalize(str);
    const engineerTest = new Engineer("person",12345,"example@example.com","FirstL")
      expect(engineerTest.getRole()).toEqual("Engineer");
    });
})