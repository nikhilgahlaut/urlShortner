import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export async function connectToMongoDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Connected to MongoDB with Mongoose");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}