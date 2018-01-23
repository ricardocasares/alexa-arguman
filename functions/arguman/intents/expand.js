const log = require("debug")("app:intent:expand");
const { premise, hasType } = require("../lib");

module.exports = function(app) {
  app.intent(
    "ExpandIntent",
    {
      utterances: [
        "Why",
        "How",
        "Expand",
        "Tell me more about it",
        "Please expand",
        "But what",
        "Because"
      ]
    },
    (req, res) => {
      const store = req.getSession();
      const contention = store.get("contention");
      const { absolute_url: url } = contention;

      log(contention);

      return premise(`${url}.json`).then(({ type, premise }) => {
        return res.say(hasType(premise, type)).shouldEndSession(false);
      });
    }
  );
};
