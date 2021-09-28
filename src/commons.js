// method: HTTP method
// a: where the first operand should be
// b: where the second operand should be
exports.api = {
  add: {
    method: "get",
    a: "query",
    b: "query"
  },
  minus: {
    method: "delete",
    a: "query",
    b: "params"
  },
  multiply: {
    method: "post",
    a: "params",
    b: "body"
  },
  divide: {
    method: "put",
    a: "body",
    b: "query"
  }
};
