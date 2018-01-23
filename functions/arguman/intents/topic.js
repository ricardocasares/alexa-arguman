const log = require("debug")("app:intent:topic");
const { pick } = require("../lib");

module.exports = function(app) {
  app.intent(
    "TopicIntent",
    {
      utterances: [
        "Pick an argument",
        "Another one",
        "Choose another one",
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
      const store = req.getSession();

      return pick().then(contention => {
        log(contention);
        const { title } = contention;
        store.set("contention", contention);
        return res.say(title).shouldEndSession(false);
      });
    }
  );
};
