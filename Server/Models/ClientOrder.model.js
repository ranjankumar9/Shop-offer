const mongoose = require("mongoose");

const schema = mongoose.Schema({
  email: { type: String, required: true },
  userId: { type: String, required: true },
  items: { type: Array, required: true },
  price: { type: String, required: true },
  date: { type: String, default: new Date().toLocaleString() },
});

const ClientOrderModel = mongoose.model("order", schema);

module.exports = {
  ClientOrderModel,
};
