const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    product_image: { type: String, default: "user" },
    product_title: { type: String, required: true },
    mrp: { type: String, required: true },
    offer_price: { type: String, required: true },
    product_discount: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);
