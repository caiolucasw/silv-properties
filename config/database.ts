import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  if (connected) {
    console.log("Already connected");
    return;
  }

  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("URI não definida");
    }
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
  } catch (e) {
    console.log(e);
  }
};

export default connectDB;
