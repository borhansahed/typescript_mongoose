import { model } from "mongoose";
import { IUser } from "./user.interface";
import { userSchema } from "./user.schema";

const User = model<IUser>("User", userSchema);
export default User;
