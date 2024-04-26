import { configDotenv } from "dotenv";
import mongoose from "mongoose";
configDotenv();
mongoose.connect(process.env.DB).then(() => {
  console.log("Connected to MongoDB");
});
