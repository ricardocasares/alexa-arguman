const app = require("../app");
const topic = require("./requests/topic");
const because = require("./requests/because");
jest.mock("../lib");

describe("arguman", () => {
  test("should respond to because intents", () => {
    return expect(app.request(because)).resolves.toMatchSnapshot();
  });
});
