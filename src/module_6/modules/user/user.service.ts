import { IUser } from "./user.interface";
import User from "./user.model";

export const createUser = async (payload: IUser): Promise<IUser> => {
  try {
    const user = new User(payload);
    await user.save();
    return user;
  } catch (err: any) {
    console.log(err._message);
    return err;
  }
};

export const getUserFromDB = async (): Promise<IUser[]> => {
  const user = await User.find();
  return user;
};

export const getUserById = async (email: string): Promise<IUser | null> => {
  const user = await User.findOne({ email }, { name: 1 });
  return user;
};
