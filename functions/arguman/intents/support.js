const log = require("debug")("app:intent:support");

module.exports = function(app) {
  app.intent(
    "SupportIntent",
    {
      utterances: [
        "What's the support rate",
        "Do you support this",
        "Are you against or in favor",
        "Do you believe this",
        "What is the support rate"
      ]
    },
    (req, res) => {
      const store = req.getSession();
      const contention = store.get("contention");

      if (!contention) {
        return res.say("Please choose a topic first").shouldEndSession(false);
      }

      log(contention);

      const { support_rate = 0 } = contention;

      const percentage = Math.round(support_rate * 100) / 100;

      return res
        .say(`Support rate for this contention is ${percentage}%`)
        .shouldEndSession(false);
    }
  );
};
