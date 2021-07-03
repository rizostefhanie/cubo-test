import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const validatePassword = (password: string, passwordEncrypt: string) => {
  const resp = bcrypt.compareSync(passwordEncrypt, password);
  return resp;
};

const secret = "$@CUBO2021FINANCE$";

export const tokenSign = (username: string, rol: string): string => {
  try {
    
    let token =
    jwt.sign({
      exp: Math.floor(Date.now() / 1000) + (60 * 60),
      data: { username: username, rol: rol }
    }, secret);
    return token;
  } catch (e) {
    console.log("ERROR=>"+e)
    return "";
  }
};

export const tokenVerify = (token: string): boolean => {
  let isCorrect = false;
  jwt.verify(token, secret, (err) => {
    if (err) {isCorrect = false; } else { isCorrect = true; }
  });
  return isCorrect;
};