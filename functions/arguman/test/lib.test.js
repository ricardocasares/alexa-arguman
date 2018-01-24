jest.mock("node-fetch");
const premises = require("./responses/premises");
const contentions = require("./responses/contentions");
const api = require("../lib");

describe("arguman api", () => {
  describe("pick", () => {
    beforeEach(() => {
      require("node-fetch").mockResolve(contentions);
    });

    test("should pick a random topic", () => {
      expect.assertions(4);

      return api.pick("url").then(data => {
        const keys = Object.keys(data);

        expect(keys).toContain("id");
        expect(keys).toContain("title");
        expect(keys).toContain("support_rate");
        expect(keys).toContain("absolute_url");
      });
    });
  });

  describe("premise", () => {
    beforeEach(() => {
      require("node-fetch").mockResolve(premises);
    });

    test("picks a random premise of type for given topic", () => {
      expect.assertions(2);

      return api
        .premise("but")("url")
        .then(data => {
          expect(data).toBeDefined();
          expect(data).toMatch(/but/);
        });
    });
  });

  describe("premise call with error", () => {
    beforeEach(() => {
      require("node-fetch").mockReject(new Error());
    });

    test("catch", () => {
      expect.assertions(2);
      return api
        .premise("but")("url")
        .then(data => {
          expect(data).toBeDefined();
          expect(data).toMatch(/nothing/);
        });
    });
  });

  describe("helpers", () => {
    test("hasType", () => {
      expect(api.hasType("something", "but")).toBe("but, something");
      expect(api.hasType("but, something", "but")).toBe("but, something");
    });

    test("selectType", () => {
      const { nodes: { children } } = premises;

      const but = api.selectType("but")(children);
      const because = api.selectType("because")(children);
      const however = api.selectType("however")(children);

      expect(but.length).toBe(2);
      expect(because.length).toBe(2);
      expect(however.length).toBe(2);
    });
  });
});
