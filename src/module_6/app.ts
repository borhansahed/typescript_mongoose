import { Application, Request, Response } from "express";
import { Schema, model } from "mongoose";
import { IUser } from "./modules/user/user.interface";
import { userSchema } from "./modules/user/user.schema";
const express = require("express");
const cors = require("cors");
const app: Application = express();

app.use(cors());

app.get("/", async (req: Request, res: Response) => {
  try {
    const User = model<IUser>("User", userSchema);

    const user = new User({
      name: {
        fastName: "Mohammad",
        lastName: "sahed",
      },
      password: "sahed22",
      role: "stude",
      gender: "male",
      email: "sahed@gmail.com",
    });
    await user.save();
    res.send(user);
  } catch (err: any) {
    console.log(err._message);
    res.send(err._message);
  }
});

export default app;
