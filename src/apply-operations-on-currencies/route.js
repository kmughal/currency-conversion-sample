const Express = require("express");
const routes = Express.Router();
const { handler } = require("./handler");

module.exports.addCurrencyConversionRoutes = () => {
  routes.post("/apply-operations-currency", handler);
  return routes;
};
