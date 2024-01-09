import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";
import mongoose from "mongoose";

const port = process.env.PORT || 3000;
const DB = process.env.DB_URI;

mongoose
  .connect(DB)
  .then(() => console.log("mongo connected successfully!"))
  .catch((err) => {
    console.error("mongo connection failed", err);
  });

app.listen(port, () => {
  console.log("app is running on ", port);
});
