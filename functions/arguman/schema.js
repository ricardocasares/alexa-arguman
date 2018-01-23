const app = require("./app");
const assign = Object.assign;
const schema = JSON.parse(app.schemas.skillBuilder());
const language = {
  languageModel: assign(schema, { invocationName: app.name })
};

console.log(JSON.stringify(language, null, 2));
