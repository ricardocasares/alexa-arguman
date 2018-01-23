const fetch = require("node-fetch");
const get = url => fetch(url).then(x => x.json());
const random = x => x[Math.floor(Math.random() * x.length)];

const featured = "https://en.arguman.org/featured.json?offset=0";

exports.pick = () =>
  get(featured)
    .then(({ contentions }) => contentions)
    .then(random);

exports.premise = url =>
  get(url)
    .then(({ nodes: { children } }) => children)
    .then(random)
    .then(({ premise_type: type, name: premise }) => ({ type, premise }));

exports.hasType = function hasType(premise, type) {
  if (premise.toLowerCase().startsWith(type.toLowerCase())) {
    return premise;
  }

  return `${type}, ${premise}`;
};
