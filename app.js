require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./db/conn");
const router = require("./Routes/router");
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cors());
app.use(router);

app.get("/", (req, res) => {
  res.status(200).json("Server run hoo raha hai bhai , cazzzz! ");
});

app.listen(PORT, () => {
  console.log(`Hii suraj Serever is Runing properly :${PORT}`);
});
