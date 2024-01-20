const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(express.json());

app.use("/auth", authRoutes);

app.listen(8000, async () => {
  try {
    const mongoDBURL = `mongodb+srv://sushil:sushil@e-commerce.bn2ikp0.mongodb.net/e-commerce?retryWrites=true&w=majority`;
    await mongoose.connect(mongoDBURL);
    console.log("Server Started");
  } catch (error) {
    console.log(error);
  }
});
