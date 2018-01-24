const app = require("../app");
const topic = require("./requests/topic");
const however = require("./requests/however");
jest.mock("../lib");

describe("arguman", () => {
  test("should respond to however intents", () => {
    return expect(app.request(however)).resolves.toMatchSnapshot();
  });
});
