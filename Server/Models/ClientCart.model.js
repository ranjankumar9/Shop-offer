const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    product_image: { type: String, required: true },
    product_title: { type: String, required: true },
    offer_price: { type: Number, required: true },
    quantity: { type: Number, default: 1 },
    userId: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const ClientCartModel = mongoose.model("cartitem", schema);

module.exports = {
  ClientCartModel,
};
