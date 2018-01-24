const arguman = require("../app");
const request = require("./requests/launch");

describe("arguman", () => {
  test("should launch properly", () => {
    return expect(arguman.request(request)).resolves.toMatchSnapshot();
  });
});
