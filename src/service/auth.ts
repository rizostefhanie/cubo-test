

import { Request, Response } from "express";
import { User } from "../models/User"
import {validatePassword, tokenSign} from "../config/utils"


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
