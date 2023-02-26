const { ClientCartModel } = require("../../Models/ClientCart.model");
const { ClientOrderModel } = require("../../Models/ClientOrder.model");

const clientOrderRouter = require("express").Router();

clientOrderRouter.get("/get", async (req, res) => {
  try {
    const { userId } = req.body;
    const orders = await ClientOrderModel.find({ userId });
    res.send(orders);
  } catch (error) {
    res.send({ msg: "Something went wrong. Please try again later", error });
  }
});

clientOrderRouter.post("/post", async (req, res) => {
  try {
    const { userId } = req.body;
    await ClientOrderModel.insertMany(req.body);
    await ClientCartModel.deleteMany({ userId });
    res.send({ msg: "Order placed successfully" });
  } catch (error) {
    res.send({ msg: "Something went wrong. Please try again later", error });
  }
});

module.exports = {
  clientOrderRouter,
};
