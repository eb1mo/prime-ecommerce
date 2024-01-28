const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");
const upload = require("./config/multerConfig");
const morgan = require("morgan");

const app = express();
app.use(morgan("dev"));

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);

app.use("/auth", authRoutes);
app.use("/product", [upload.any("images")], productRoutes);

app.listen(8000, async () => {
  try {
    const mongoDBURL = `mongodb+srv://sushil:sushil@e-commerce.bn2ikp0.mongodb.net/e-commerce?retryWrites=true&w=majority`;
    await mongoose.connect(mongoDBURL);
    console.log("Server Started");
  } catch (error) {
    console.log(error);
  }
});
