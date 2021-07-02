import { Request, Response } from "express";
import { Rol, IRol } from "../models/rol"


export const createRol = async (req: Request, resp: Response) => {
  try {
    let rol: IRol = req.body;
    let rolModel = new Rol(rol)
    await rolModel.save()
    resp.status(200);
    resp.json({ message: "OK" });
  } catch (error) {
    resp.status(500);
    resp.json({ message: "Error : " + error });
  }
}
