import { Request, Response } from "express";
import { createUser, getUserById, getUserFromDB } from "./user.service";

export const insertToDB = async (req: Request, res: Response) => {
  const data = req.body;
  const user = await createUser(data);
  res.send({
    status: "success",
    data: user,
  });
};

export const getUsers = async (req: Request, res: Response) => {
  const user = await getUserFromDB();
  res.send({
    data: user,
  });
};
export const getUserByEmail = async (req: Request, res: Response) => {
  const { email } = req.params;
  const user = await getUserById(email);
  res.send({
    status: "success",
    data: user,
  });
};
