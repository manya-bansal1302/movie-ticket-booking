import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("Mongoose connected to DB")
    );
    await mongoose.connect("mongodb://localhost:27017/movies-booking-app");
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
};
export default connectDB;
