var alexa = require("alexa-app");
var app = new alexa.app("sample");
var { pick, premise } = require("./lib");

app.launch((req, res) => {
  res.say("Welcome!");
});

app.intent(
  "ArgumanIntent",
  {
    utterances: [
      "Pick an argument",
      "Choose a topic",
      "Find a discussion",
      "Let's talk about something",
      "Let's discuss",
      "Tell me something"
    ]
  },
  (req, res) => {
    var store = req.getSession();

    return pick().then(contention => {
      var { title } = contention;
      store.set("contention", contention);
      return res.say(title);
    });
  }
);

app.intent(
  "WhyIntent",
  {
    utterances: ["Why", "How", "Expand"]
  },
  (req, res) => {
    var store = req.getSession();
    var { absolute_url: url } = store.get("contention");

    return premise(`${url}.json`).then(({ type, premise }) => {
      res.say(`${type}, ${premise}`);
    });
  }
);

module.exports = app;
