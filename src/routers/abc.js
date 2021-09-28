// "abc" as in the basic operators
// Idea from: "As easy as ABC"

const router = require("express").Router();
const operators = require("../operators");
const { api } = require("../commons");

// Generates route and middleware based on the API.
Object.keys(api).forEach(function (key) {
  const { method, a, b } = api[key];
  let path = `/${key}`;
  if (a === "params") path += `/:a`;
  if (b === "params") path += `/:b`;
  router[method.toLowerCase()](path, function (req, res) {
    const aValue = +req[a].a;
    const bValue = +req[b].b;
    const result = operators[key](aValue, bValue);
    console.log(key, aValue, bValue, result);
    return res.json({ result: result });
  });
});

module.exports = router;
