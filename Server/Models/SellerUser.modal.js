const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    seller_name: { type: String, required: true },
    shop_name: { type: String, default: "user" },
    email: { type: String, required: true },
    pass: { type: String, required: true },
    gst_number: { type: String, required: true },
    location: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const SellerUserModel = mongoose.model("seller_user", schema);

module.exports = {
  SellerUserModel,
};
