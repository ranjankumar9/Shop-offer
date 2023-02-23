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
    res.send({ msg: "Product data added successfully" });
  } catch (error) {
    res.send({ msg: "Something went wrong. Please try again later", error });
  }
});

module.exports = {
  sellerProductsRouter,
};
