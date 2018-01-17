var alexa = require("alexa-app");
var app = new alexa.app("sample");

require("./intents")(app);

app.launch((req, res) => {
  res.say("Welcome to Arguman!");
});

module.exports = app;
