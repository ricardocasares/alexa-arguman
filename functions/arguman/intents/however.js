const log = require("debug")("app:intent:expand");
const { premise } = require("../lib");

const NAME = "HoweverIntent";
const MODEL = {
  utterances: [
    "However",
    "It can't be true",
    "Is it true",
    "Not really",
    "Not true"
  ]
};

function handler(req, res) {
  const store = req.getSession();
  const contention = store.get("contention");
  const { absolute_url: url } = contention;

  log(contention);

  return premise('however')(`${url}.json`).then(answer => {
    return res.say(answer).shouldEndSession(false);
  });
}

module.exports = app => app.intent(NAME, MODEL, handler);
