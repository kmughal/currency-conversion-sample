const { currencyConverter } = require("../lib/currency-converter");
const assert = require("node:assert");
module.exports.handler = handler;

function handler(req, res, next) {
  try {
    const requestBody = req.body ?? {};
    assert(!!requestBody.to, "to not provided");
    assert(!!requestBody.from, "from not provided");
    assert(!!requestBody.amount, "amount not provided");

    const { to, from, amount } = requestBody;
    const conversion = currencyConverter({ to, from, amount });
    res.json({
      [`amountIn${String(from).toUpperCase()}`]: amount,
      [`amountIn${String(to).toUpperCase()}`]: conversion
    });
  } catch (err) {
    if (err instanceof assert.AssertionError) {
      return next(new Error(err.message));
    }
    next(err);
  }
}
