const { ProductModel } = require("../../Models/Product.model");
const sellerProductsRouter = require("express").Router();

sellerProductsRouter.get("/get", async (req, res) => {
  try {
    const { sellerId } = req.body;
    const sellerData = await ProductModel.find({ sellerId });

    res.send(sellerData);
  } catch (error) {
    res.send({ msg: "Something went wrong. Please try again later", error });
  }
});

sellerProductsRouter.post("/post", async (req, res) => {
  try {
    const sellerData = new ProductModel(req.body);
    await sellerData.save();
    res.send({ msg: "Item added successfully" });
  } catch (error) {
    res.send({ msg: "Something went wrong. Please try again later", error });
  }
});

sellerProductsRouter.patch("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await ProductModel.findByIdAndUpdate({ _id: id }, req.body);
    res.send({ msg: "Items updated" });
  } catch (error) {
    res.send({ msg: "Something went wrong. Please try again later", error });
  }
});

sellerProductsRouter.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await ProductModel.findByIdAndDelete({ _id: id });
    res.send({ msg: "Items deleted" });
  } catch (error) {
    res.send({ msg: "Something went wrong. Please try again later", error });
  }
});

module.exports = {
  sellerProductsRouter,
};
