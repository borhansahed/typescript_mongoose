import mongoose from "mongoose";

export default async function connectMongoose() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/");
    console.log("Database Connected");
  } catch (err: any) {
    console.log("not connected", err);
  }
}
