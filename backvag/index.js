const express = require("express");
const { connect } = require("./config/db");
const bodyParser = require("body-parser");
const cors = require("cors");
const { router } = require("./routes/ContactRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/user", router);

app.listen(process.env.port, async () => {
  try {
    await connect;
    console.log(`port runing mine at ${process.env.port}`);
    console.log("connected to db");
  } catch (err) {
    console.log(err);
    console.log("trouble in connected to db");
  }
});
