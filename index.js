const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");

require("dotenv").config();

// Middle
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// Route and Middle
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(
  process.env.PORT,
  console.log(`Server running at PORT:http://localhost:${process.env.PORT}`)
);
