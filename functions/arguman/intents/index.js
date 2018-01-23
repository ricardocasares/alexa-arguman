module.exports = function(app) {
  require("./topic")(app);
  require("./but")(app);
  require("./because")(app);
  require("./however")(app);
  require("./support")(app);
};
