const currencyConverterDefault = require("../lib/currency-converter");
const { handler: sut } = require("./handler");
describe("currencyCoverterRouteHandler Tests", () => {
  const mockReq = {};
  const mockRes = { json: jest.fn() };
  const mockNext = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Should return conversion amount", () => {
    mockReq.body = { to: "GBP", amount: 1, from: "DOLLAR" };
    sut(mockReq, mockRes, mockNext);
    expect(mockRes.json).toHaveBeenCalledWith({
      amountInDOLLAR: 1,
      amountInGBP: 0.86259069
    });
  });
  test("Should run mockNext middleware when any error occurs", () => {
    mockReq.body = null;
    const expectedError = new Error("to not provided");
    sut(mockReq, mockRes, mockNext);
    expect(mockNext).toHaveBeenCalledWith(expectedError);
  });

  test("Should report error when CURRENCY CONFIG is not present", () => {
    mockReq.body = { to: "ABC", amount: 1, from: "Dollar" };
    const expectedError = new Error("Invalid keys provide for to");
    sut(mockReq, mockRes, mockNext);
    expect(mockNext).toHaveBeenCalledWith(expectedError);
  });

  test("Should report error when CURRENCY CONFIG is not present", () => {
    const expectedError = new Error("Invalid keys provided for from");
    sut({ body: { to: "Dollar", amount: 1, from: "ABC" } }, mockRes, mockNext);
    expect(mockNext).toHaveBeenCalledWith(expectedError);
  });
});
