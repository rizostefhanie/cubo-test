

import { Request, Response } from "express";
import { User, IUser } from "../models/User"
import {validatePassword, tokenSign} from "../config/utils"

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
   if(user){
      let validate = validatePassword( user.password, req.body.password);
      if(validate){
        let token = tokenSign(user.username, user.rol )
        if(token!=""){
          resp.status(200);
          resp.json({ message: "Authorized", token: token, user: user });
        }else{
          resp.status(500);
          resp.json({ message: "Token generated error" });
        }
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



export const findUsers = async (req: Request, resp: Response) => {
  try {
    let userModel = new User()
    const users = userModel.find(req.body.filter)
    .limit(req.body.limit)
    .skip(((req.body.pageNumber - 1) * req.body.limit))
    .exec();
    resp.status(200);
    resp.json({ message: "OK", data: users, pageNumber: req.body.pageNumbe, limit: req.body.limit });
  } catch (error) {
    resp.status(500);
    resp.json({ message: "Error : " + error });
  }
}
