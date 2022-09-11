const Express = require("express");
const routes = Express.Router();
const { handler } = require("./handler");

module.exports.currencyConverter = () => {
  routes.post("/currency-converter", handler);
  return routes;
};
