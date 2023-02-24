const clientOrderRoutes = require("express").Router();

clientOrderRoutes.get("/get", (req, res) => {
  res.send("orders");
});
