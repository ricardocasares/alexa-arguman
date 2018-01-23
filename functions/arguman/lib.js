const log = require("debug")("app:api");
const fetch = require("node-fetch");
const get = url => fetch(url).then(x => x.json());
const random = x => x[Math.floor(Math.random() * x.length)];

const featured = "https://en.arguman.org/featured.json?offset=0";

exports.pick = () =>
  get(featured)
    .then(({ contentions }) => contentions)
    .then(random);

exports.premise = type => url =>
  get(url)
    .then(({ nodes: { children } }) => children)
    .then(selectType(type))
    .then(random)
    .then(({ premise_type: type, name: premise }) => hasType(premise, type))
    .catch(e => {
      log(e);
      return 'I have nothing else to say about this.'
    });

function hasType(premise, type) {
  if (premise.toLowerCase().startsWith(type.toLowerCase())) {
    return premise;
  }

  return `${type}, ${premise}`;
};

function selectType(type) {
  return function(x) {
    log(type, x);
    return x.filter(y => y.premise_type === type);
  }
}
