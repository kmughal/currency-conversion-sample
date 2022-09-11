const { currencyConverter } = require("./currency-converter");

describe("currencyConverter Tests", () => {
  test("Should report error WHEN converted TO currency is not provided", () => {
    expect(() => {
      currencyConverter();
    }).toThrow("Convert to key not provided");
  });
  test("Should report error WHEN converted TO currency is not provided", () => {
    expect(() => {
      currencyConverter({ amount: 400, from: "Dollar" });
    }).toThrow("Convert to key not provided");
  });
  test("Should report error WHEN converted FROM currency is not provided", () => {
    expect(() => {
      currencyConverter({ to: "GBP", amount: 400 });
    }).toThrow("Convert from key not provided");
  });
  test("Should report error WHEN AMOUNT is not provided", () => {
    expect(() => {
      currencyConverter({ to: "GBP", from: "GBP" });
    }).toThrow("Amount not provided");
  });
  test("Should return SAME AMOUNT WHEN both currencies are same", () => {
    const actual = currencyConverter({ to: "GBP", from: "GBP", amount: 500 });
    expect(actual).toBe(500);
  });
  test("Should return conversion amount for happy path", () => {
    const actual = currencyConverter({
      to: "GBP",
      from: "DOLLAR",
      amount: 500
    });
    expect(actual).toBe(431.295345);
  });
  test("Should report error when invalid amount is passed", () => {
    expect(() => {
      currencyConverter({ to: "GBP", from: "DOLLAR", amount: "abc" });
    }).toThrow("Invalid Amount");
  });
});
