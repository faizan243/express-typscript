import mongoose, { ConnectOptions } from "mongoose";

// Define a function to connect to MongoDB with proper types
const connectDB = async (DATABASE_URL: any) => {
  try {
    const DB_OPTIONS: ConnectOptions = {
      dbName: "express-ts",
    };

    await mongoose.connect(DATABASE_URL, DB_OPTIONS);
    console.log("Connected Successfully...");
  } catch (error) {
    console.error("Connection failed:", error); // Provide more context on the error
  }
};

export default connectDB;
