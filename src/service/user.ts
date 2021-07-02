

import { Request, Response } from "express";
import { User, IUser } from "../models/User"
import {validatePassword} from "../config/utils"

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

export const loginUser = async (req: Request, resp: Response) => {
  try {
    let user = await User.findOne({username : req.body.username}).exec();
    console.log("user => "+JSON.stringify(user))
   if(user){
      let validate = validatePassword( user.password, req.body.password);
      if(validate){
        resp.status(200);
    resp.json({ message: "Authorized" });
      }else{
        resp.status(401);
    resp.json({ message: "Unauthorized" });
      }
   }else{
     resp.status(200);
    resp.json({ message: "Not found" });
   }
  } catch (error) {
    resp.status(500);
    resp.json({ message: "Error : " + error });
  }
}
