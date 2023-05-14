import { Application, Request, Response } from "express";
import User from "./modules/user/user.model";
import userRoute from "./modules/user/user.route";
const express = require("express");
const cors = require("cors");
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use("/user", userRoute);

app.get("/", async (req: Request, res: Response) => {
  res.send({ hello: "world" });
});

export default app;
