var fetch = require("node-fetch");
var get = url => fetch(url).then(x => x.json());
var random = x => x[Math.floor(Math.random() * x.length)];

var featured = "https://en.arguman.org/featured.json?offset=0";

exports.pick = () =>
  get(featured)
    .then(({ contentions }) => contentions)
    .then(random);

exports.premise = url =>
  get(url)
    .then(({ nodes: { children } }) => children)
    .then(random)
    .then(({ premise_type: type, name: premise }) => ({ type, premise }));
