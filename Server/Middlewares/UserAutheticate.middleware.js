const jwt = require("jsonwebtoken");

const UserAuthenticate = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, "shopoffer_user", (err, decoded) => {
      if (decoded) {
        req.body.userId = decoded.userId;
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
  UserAuthenticate,
};
