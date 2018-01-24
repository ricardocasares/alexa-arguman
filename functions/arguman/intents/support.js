const log = require("debug")("app:intent:support");

const NAME = "SupportIntent";
const MODEL = {
  utterances: [
    "What's the support rate",
    "Do you support this",
    "Are you against or in favor",
    "Do you believe this",
    "What is the support rate"
  ]
};

function handler(req, res) {
  const store = req.getSession();
  const contention = store.get("contention");

  if (!contention) {
    return res.say("Please choose a topic first").shouldEndSession(false);
  }

  log(contention);

  const { support_rate } = contention;

  const percentage = Math.round(support_rate * 100) / 100;

  return res
    .say(`Support rate for this contention is ${percentage}%`)
    .shouldEndSession(false);
}

module.exports = app => app.intent(NAME, MODEL, handler);
