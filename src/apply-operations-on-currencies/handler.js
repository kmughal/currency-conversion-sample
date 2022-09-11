const assert = require("node:assert");
const { currencyConverter } = require("../lib/currency-converter");

module.exports.handler = handler;
const defaultInput = {
  amount: null,
  currency: null
};
function handler(req, res, next) {
  try {
    const requestBody = req.body ?? {};

    const {
      input1: { amount: amount1, currency: currency1 } = defaultInput,
      input2: { amount: amount2, currency: currency2 } = defaultInput,
      operation,
      resultCurency
    } = requestBody;

    validateInput({
      to: resultCurency,
      from: currency1,
      objectName: "input1",
      amount: amount1
    });
    validateInput({
      to: resultCurency,
      from: currency2,
      objectName: "input2",
      amount: amount2
    });

    const amount1InResponseCurrency = currencyConverter({
      to: resultCurency,
      from: currency1,
      amount: amount1
    });

    const amount2InResponseCurrency = currencyConverter({
      to: resultCurency,
      from: currency2,
      amount: amount2
    });
    let result = 0;
    switch (operation) {
      case "+":
      case "add":
      case "addition":
      case "sum":
        result = amount1InResponseCurrency + amount2InResponseCurrency;
        break;
      case "-":
      case "sub":
      case "subtract":
      case "minus":
        result = amount1InResponseCurrency - amount2InResponseCurrency;
        break;
    }
    return res.json({
      input1: `${amount1} ${currency1}`,
      input2: `${amount2} ${currency2}`,
      resultCurency,
      outcome: `${operation} ${amount1} ${currency1} to ${amount2} ${currency2} and result is ${result} ${resultCurency}`
    });
  } catch (err) {
    if (err instanceof assert.AssertionError) {
      return next(new Error(err.message));
    }
    next(err);
  }
}

function validateInput({ to, from, amount, objectName }) {
  assert(!!to, `${objectName}.to not provided`);
  assert(!!from, `${objectName}.from not provided`);
  assert(!!amount, `${objectName}.amount not provided`);
}
