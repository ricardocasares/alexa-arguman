const { pick } = require("../lib");

module.exports = function(app) {
  app.intent(
    "TopicIntent",
    {
      utterances: [
        "Pick an argument",
        "Choose a topic",
        "Find a discussion",
        "Let's talk about something",
        "Let's discuss",
        "Tell me something",
        "Select a topic",
        "Amuse me",
        "Say something interesting"
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
};
