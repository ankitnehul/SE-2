const express = require("express");
const port = process.env.port || 5000;
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const connection = require("./connection");
const router = require("./routes/loginreg");
const adminroute = require("./routes/adminpage");
const customerroute = require("./routes/customerpage");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Listening to ${port}`);
});

app.use("/api", router);
app.use("/adminpage", adminroute);
app.use("/customerpage", customerroute);
