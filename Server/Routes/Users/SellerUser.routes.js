const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { SellerUserModel } = require("../../Models/SellerUser.modal");

const sellerUserRouter = express.Router();

sellerUserRouter.post("/register", async (req, res) => {
  try {
    const { seller_name, shop_name, gst_number, location, email, pass } =
      req.body;
    const user = await SellerUserModel.find({ email });
    if (user.length > 0) {
      res.send({ msg: "Seller already exist. Please login" });
    } else {
      bcrypt.hash(pass, 5, async (err, hash) => {
        if (err) {
          res.send({ msg: "something went wrong", err });
        }
        const newuser = new SellerUserModel({
          seller_name,
          shop_name,
          gst_number,
          location,
          email,
          pass: hash,
        });
        await newuser.save();
        res.send({ msg: "seller registered successfully" });
      });
    }
  } catch (error) {
    res.send({ msg: "something went wrong", error });
  }
});

sellerUserRouter.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  try {
    const loggedUser = await SellerUserModel.find({ email });
    if (loggedUser.length > 0) {
      bcrypt.compare(pass, loggedUser[0].pass, function (err, result) {
        if (err) throw err;
        if (result) {
          const token = jwt.sign(
            { sellerId: loggedUser[0]._id },
            "shopoffer_seller"
          );
          res.send({ msg: "Seller logged in", token });
        } else {
          res.send({ msg: "wrong credentials" });
        }
      });
    } else {
      res.send({ msg: "Seller does not exist. Please register" });
    }
  } catch (error) {
    res.send({ msg: "something went wrong", error });
  }
});

module.exports = {
  sellerUserRouter,
};
