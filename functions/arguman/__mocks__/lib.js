const {
  contentions: [contention]
} = require("../test/responses/contentions.json");
const { nodes: { children } } = require("../test/responses/premises.json");

const filter = type => x => x.filter(y => y.premise_type === type)[0].name;

exports.pick = url => Promise.resolve(contention);
exports.premise = type => url => Promise.resolve(filter(type)(children));
