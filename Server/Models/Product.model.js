const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    product_image: { type: String, required: true },
    product_title: { type: String, required: true },
    mrp: { type: String, required: true },
    offer_price: { type: String, required: true },
    product_discount: { type: String, required: true },
    product_rating_count: { type: String, required: true },
    category: { type: String, required: true },
    type: { type: String, required: true },
    sellerId: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const ProductModel = mongoose.model("product", schema);

module.exports = {
  ProductModel,
};
