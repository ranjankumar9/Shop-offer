const app = require("express")();
const cors = require("cors");
const { json } = require("express");
const { connection } = require("./Configs/db");
const { userRouter } = require("./Routes/User.routes");
require("dotenv").config();

app.use(cors());
app.use(json());
app.use("/", userRouter);

app.listen(process.env.port, async () => {
  try {
    connection;
    console.log("connected to DB at 3000");
  } catch (error) {
    console.log({ msg: "could not connect", error });
  }
});
