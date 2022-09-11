const Express = require("express");
const app = Express();
const {addMiddlewares} = require("./middlewares");

addMiddlewares(app);
module.exports.app = app;