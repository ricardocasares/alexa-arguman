const app = require("../app");
const topic = require("./requests/topic");
const but = require("./requests/but");
jest.mock("../lib");

describe("arguman", () => {
  test("should respond to topic intents", () => {
    return expect(app.request(but)).resolves.toMatchSnapshot();
  });
});
