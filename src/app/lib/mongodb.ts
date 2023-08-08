import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.set("strictQuery", false);
  try {
    if (mongoose.connection.readyState === 0) {
      const mongodbUri = process.env.MONGODB_URI as string;
      await mongoose.connect(mongodbUri);
      console.log("Connection to Mongo DB established!");
    }
  } catch (error) {
    console.log("Error connecting to MONGODB", error);
  }
};

export default connectDB;