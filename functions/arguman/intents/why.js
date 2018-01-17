const { premise } = require("../lib");

module.exports = function(app) {
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
};
