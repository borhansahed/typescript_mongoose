import { Request, Response } from "express";
import { getUserByEmail, getUsers, insertToDB } from "./user.controller";

const express = require("express");
const userRoute = express.Router();

userRoute.get("/", getUsers);
userRoute.post("/create-user", insertToDB);
userRoute.get("/:email", getUserByEmail);

export default userRoute;
