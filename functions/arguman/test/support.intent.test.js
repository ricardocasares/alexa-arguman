const app = require("../app");
const topic = require("./requests/topic");
const support = require("./requests/support");
const no_contention = require("./requests/support_no_contention");
jest.mock("../lib");

describe("arguman", () => {
  test("should respond to support intents", () => {
    return expect(app.request(support)).resolves.toMatchSnapshot();
  });

  test("should respond to support intents without contention", () => {
    return expect(app.request(no_contention)).resolves.toMatchSnapshot();
  });
});
