const bodyParser = require("body-parser");
const { currencyConverter } = require("../currency-converter/route");
const {
  addCurrencyConversionRoutes
} = require("../apply-operations-on-currencies/route");

module.exports.addMiddlewares = addMiddlewares;

function addMiddlewares(app) {
  app.use(bodyParser.json());
  app.use("/", currencyConverter());
  app.use("/", addCurrencyConversionRoutes());
  app.use((err, _, res, __) => {
    if (err) {
      console.error(err.message);
      res.json({ message: err.message, status: 500 });
    }
  });
}
