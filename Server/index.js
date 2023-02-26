const app = require("express")();
const cors = require("cors");
const { json } = require("express");
const { connection } = require("./Configs/db");
const {
  SellerAuthenticate,
} = require("./Middlewares/SellerAuthenticate.middleware");
const {
  UserAuthenticate,
} = require("./Middlewares/UserAutheticate.middleware");
const { ClientCartRouter } = require("./Routes/Cart/ClientCart.routes");
const { clientOrderRouter } = require("./Routes/Order/ClientOrder.routes");
const { allProductsRouter } = require("./Routes/Products/AllProducts.routes");
const {
  sellerProductsRouter,
} = require("./Routes/Products/SellerProducts.routes");
const { clientUserRouter } = require("./Routes/Users/ClientUser.routes");
const { sellerUserRouter } = require("./Routes/Users/SellerUser.routes");
require("dotenv").config();

app.use(cors());
app.use(json());
app.use("/user", clientUserRouter);
app.use("/user", UserAuthenticate, ClientCartRouter);
app.use("/user/orders", UserAuthenticate, clientOrderRouter);
app.use("/seller", sellerUserRouter);
app.use("/seller", SellerAuthenticate, sellerProductsRouter);
app.use("/products", allProductsRouter);

app.listen(process.env.port, async () => {
  try {
    connection;
    console.log("connected to DB at 4500");
  } catch (error) {
    console.log({ msg: "could not connect", error });
  }
});
