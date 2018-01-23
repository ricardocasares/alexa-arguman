const log = require("debug")("app:intent:but");
const { premise } = require("../lib");

const NAME = "ButIntent";
const MODEL = {
  utterances: [
    "But",
    "No way",
    "Impossible",
    "But what"
  ]
};

function handler(req, res) {
  const store = req.getSession();
  const contention = store.get("contention");
  const { absolute_url: url } = contention;

  log(contention);

  return premise('but')(`${url}.json`).then(answer => {
    return res.say(answer).shouldEndSession(false);
  });
}

module.exports = app => app.intent(NAME, MODEL, handler);
