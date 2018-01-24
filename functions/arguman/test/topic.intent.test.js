const app = require("../app");
const topic = require("./requests/topic");
jest.mock("../lib");

describe("arguman", () => {
  test("should respond to topic intents", () => {
    return expect(app.request(topic)).resolves.toMatchSnapshot();
  });
});
