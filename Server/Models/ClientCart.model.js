const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    product_image: { type: String, required: true },
    product_title: { type: String, required: true },
    offer_price: { type: String, required: true },
    quantity: { type: Number, required: true, default: 1 },
    userId: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const ClientCartModel = mongoose.model("product", schema);

module.exports = {
  ClientCartModel,
};
