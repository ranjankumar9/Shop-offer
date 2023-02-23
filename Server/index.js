const app = require("express")();
const cors = require("cors");
const { json } = require("express");
const { connection } = require("./Configs/db");
const {
  SellerAuthenticate,
} = require("./Middlewares/SellerAuthenticate.middleware");
const { allProductsRouter } = require("./Routes/Products/AllProducts.routes");
const {
  sellerProductsRouter,
} = require("./Routes/Products/SellerProducts.routes");
const { cliendUserRouter } = require("./Routes/Users/ClientUser.routes");
const { sellerUserRouter } = require("./Routes/Users/SellerUser.routes");
require("dotenv").config();

app.use(cors());
app.use(json());
app.use("/user", cliendUserRouter);
app.use("/seller", sellerUserRouter);
app.use("/seller", SellerAuthenticate, sellerProductsRouter);
app.use("/products", allProductsRouter);

app.listen(process.env.port, async () => {
  try {
    connection;
    console.log("connected to DB at 3000");
  } catch (error) {
    console.log({ msg: "could not connect", error });
  }
});
