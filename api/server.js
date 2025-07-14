const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
// let connect = require("mongoose");
const connectDB = require("./config/dbConnection.js");
const authRoute = require("./routes/authRoute.js");
const hotelRoute = require("./routes/hotelsRoute.js");
const userRoute = require("./routes/userRoute.js");
const roomsRoute = require("./routes/roomsRoute.js");
const cookieParser = require("cookie-parser");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
connectDB();

app.get("/", (req, res) => {
  res.send("Luxtansa services");
});

//Middlewares

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelRoute);
app.use("/api/users", userRoute);
app.use("/api/rooms", roomsRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
  // console.log("This is a middleware text");
  // res.send("Data from middleware");
});

app.listen(PORT, (req, res) => {
  console.log(`Server running in port:${PORT} & connected to backend`);
});
