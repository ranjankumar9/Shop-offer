const jwt = require("jsonwebtoken");

const SellerAuthenticate = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, "shopoffer_seller", (err, decoded) => {
      if (decoded) {
        req.body.sellerId = decoded.sellerId;
        next();
      } else {
        res.send({ msg: "Please login first" });
      }
    });
  } else {
    res.send({ msg: "Please login first" });
  }
};

module.exports = {
  SellerAuthenticate,
};
