const { app } = require("./app");

const port = process.env.PORT_NUMBER || 4000;
app.listen(port, () => {
  console.log("server listen to :", port);
});
