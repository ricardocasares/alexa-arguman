const log = require("debug")("app:intent:expand");
const { premise } = require("../lib");

const NAME = "WhyIntent";
const MODEL = {
  utterances: [
    "Why",
    "Please explain me",
    "Please expand",
    "Expand",
    "Explain",
    "Explain me"
  ]
};

function handler(req, res) {
  const store = req.getSession();
  const contention = store.get("contention");
  const { absolute_url: url } = contention;

  log(contention);

  return premise('because')(`${url}.json`).then(answer => {
    return res.say(answer).shouldEndSession(false);
  });
}

module.exports = app => app.intent(NAME, MODEL, handler);
