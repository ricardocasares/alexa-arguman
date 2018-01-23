const log = require("debug")("app:intent:register");
module.exports = function(app) {
  log('loading intents for', app.name);
  require("./topic")(app);
  require("./but")(app);
  require("./because")(app);
  require("./however")(app);
  require("./support")(app);
};
