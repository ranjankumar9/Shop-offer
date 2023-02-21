const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    name: { type: String, default: "user" },
    email: { type: String, required: true },
    pass: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const UserModal = mongoose.model("client_user", schema);

module.exports = {
  UserModal,
};
