import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/user.js";
import roomRoute from "./routes/room.js";
import authRoute from "./routes/auth.js";
import hotelRoute from "./routes/hotel.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDb");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("err", (err) => {
  console.log("Mongoose dissconnected!");
});
app.use(cookieParser());
app.use(express.json());
// middlewares
app.use("/api/user", userRoute);
app.use("/api/hotels", hotelRoute);
app.use("/api/auth", authRoute);
app.use("/api/rooms", roomRoute);

app.use((err, req, res, next) => {
  //Error handling
  const errStatus = err.status || 500;
  const errMessage = err.message || "Something went wrong!";
  return res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMessage,
    stack: err.stack,
  });
});

app.listen(8800, () => {
  connect();
  console.log("Connected to server");
});
