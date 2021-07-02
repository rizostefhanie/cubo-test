

import { Request, Response } from "express";
import { User, IUser } from "../models/User"

export const registerUser = async (req: Request, resp: Response) => {
  try {
    let user:IUser = req.body;
    let userModel = new User(user);
    await userModel.save()
    resp.status(200);
    resp.json({ message: "OK" });
  } catch (error) {
    resp.status(500);
    resp.json({ message: "Error : " + error });
  }
}