module.exports = function(app) {
  require("./topic")(app);
  require("./expand")(app);
  require("./support")(app);
};
