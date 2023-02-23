const { ClientCartModel } = require("../../Models/ClientCart.model");

const ClientCartRouter = require("express").Router();

ClientCartRouter.get("/get", async (req, res) => {
  try {
    const { userId } = req.body;
    const userData = await ClientCartModel.find({ userId });
    res.send(userData);
  } catch (error) {
    res.send({ msg: "Something went wrong. Please try again later", error });
  }
});

ClientCartRouter.post("/post", async (req, res) => {
  try {
    const userData = new ClientCartModel(req.body);
    await userData.save();
    res.send({ msg: "Item added to Cart" });
  } catch (error) {
    res.send({ msg: "Something went wrong. Please try again later", error });
  }
});

ClientCartRouter.patch("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await ClientCartModel.findByIdAndUpdate({ _id: id }, req.body);
    res.send({ msg: "Item Quantity Updated" });
  } catch (error) {
    res.send({ msg: "Something went wrong. Please try again later", error });
  }
});

ClientCartRouter.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await ClientCartModel.findByIdAndDelete({ _id: id });
    res.send({ msg: "Item deleted from Cart" });
  } catch (error) {
    res.send({ msg: "Something went wrong. Please try again later", error });
  }
});

module.exports = {
  ClientCartRouter,
};
