const assert = require("node:assert");
const rateConfigure = require("./config.json");
module.exports.currencyConverter = currencyConverter;

const defaultInput = { to: null, from: null, amount: null };

function currencyConverter({ to, from, amount } = defaultInput) {
  validateInput({ to, from, amount });
  if (to === from) return amount;

  const currencyConfig = rateConfigure[String(from).toUpperCase()];
  assert(currencyConfig, "Invalid keys provided for from");

  const rate = currencyConfig[String(to).toUpperCase()];
  assert(rate, "Invalid keys provide for to");
  return rate * amount;
}

function validateInput({ to, from, amount }) {
  assert(!!to, "Convert to key not provided");
  assert(!!from, "Convert from key not provided");
  assert(!!amount, "Amount not provided");
  assert(typeof amount === "number", "Invalid Amount");
}
