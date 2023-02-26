const mongoose = require("mongoose");

const schema = mongoose.Schema({
  userId: { type: String, required: true },
  product_image: { type: String, required: true },
  product_title: { type: String, required: true },
  offer_price: { type: String, required: true },
  quantity: { type: Number, default: 1 },
  date: { type: String, default: new Date().toLocaleString() },
});

const ClientOrderModel = mongoose.model("order", schema);

module.exports = {
  ClientOrderModel,
};
