const { ProductModel } = require("../../Models/Product.model");

const allProductsRouter = require("express").Router();

allProductsRouter.get("/", async (req, res) => {
  try {
    const { category, q, sort, order, type } = req.query;
    if (type && category && sort && order) {
      const products = await ProductModel.find({ type, category }).sort({
        [sort]: order == "asc" ? 1 : -1,
      });
      res.send(products);
    } else if (type && !category && sort && order) {
      const products = await ProductModel.find({ type }).sort({
        [sort]: order == "asc" ? 1 : -1,
      });
      res.send(products);
    } else if (type && category) {
      const products = await ProductModel.find({ type, category });
      res.send(products);
    } else if (type) {
      const products = await ProductModel.find({ type });
      res.send(products);
    } else if (q) {
      const products = await ProductModel.find({
        product_title: { $regex: q, $options: "i" },
      });
      res.send(products);
    } else {
      const products = await ProductModel.find();
      res.send(products);
    }
  } catch (error) {
    res.send({ msg: "Something went wrong. Please try again later", error });
  }
});

allProductsRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const products = await ProductModel.find({ _id: id });
    res.send(products);
  } catch (error) {
    res.send({ msg: "Something went wrong. Please try again later", error });
  }
});

module.exports = {
  allProductsRouter,
};
