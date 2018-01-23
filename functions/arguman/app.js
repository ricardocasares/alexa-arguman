const log = require("debug")("app");
const alexa = require("alexa-app");
const app = new alexa.app("arguman");

require("./intents")(app);

app.launch((req, res) => {
  log("launched");
  res.say("Welcome to Arguman!").shouldEndSession(false);
});

module.exports = app;
