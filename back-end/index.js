const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();
const port = 4000;

const db = require("./models");
var createFirst = require("./routes/createTestAll");
var fetchAllInfo = require("./routes/fetchInfo");
var register = require('./routes/register')

db.sequelize.sync({ alter: true }).then((req) => {});

app.use(cors())
app.use(bodyParser.json())

app.get("/", (req, res) => res.json({ msg: "SMA API verion 1.0" }));
app.use("/create", createFirst);
app.use("/fetchInfo", fetchAllInfo);
app.use("/register", register);
app.listen(port, () => {
  console.log("server is running");
});
