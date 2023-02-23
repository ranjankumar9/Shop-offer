const express = require("express");
const { ClientUserModel } = require("../../Models/ClientUser.modal");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const clientUserRouter = express.Router();

clientUserRouter.post("/register", async (req, res) => {
  try {
    const { name, email, mobile, pass } = req.body;
    const user = await ClientUserModel.find({ email });
    if (user.length > 0) {
      res.send({ msg: "User already exist. Please login" });
    } else {
      bcrypt.hash(pass, 5, async (err, hash) => {
        if (err) {
          res.send({ msg: "something went wrong", err });
        }
        const newuser = new ClientUserModel({
          name,
          email,
          mobile,
          pass: hash,
        });
        await newuser.save();
        res.send({ msg: "user is registered" });
      });
    }
  } catch (error) {
    res.send({ msg: "something went wrong", error });
  }
});

clientUserRouter.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  try {
    const loggedUser = await ClientUserModel.find({ email });
    if (loggedUser.length > 0) {
      bcrypt.compare(pass, loggedUser[0].pass, function (err, result) {
        if (err) throw err;
        if (result) {
          const token = jwt.sign(
            { userId: loggedUser[0]._id },
            "shopoffer_user"
          );
          res.send({ msg: "logged in", token });
        } else {
          res.send({ msg: "wrong credentials" });
        }
      });
    } else {
      res.send({ msg: "User does not exist. Please register" });
    }
  } catch (error) {
    res.send({ msg: "something went wrong", error });
  }
});

module.exports = {
  clientUserRouter,
};
