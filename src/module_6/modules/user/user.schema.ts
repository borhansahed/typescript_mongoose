import { Schema } from "mongoose";
import { IUser } from "./user.interface";

export const userSchema = new Schema<IUser>({
  name: {
    fastName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});
