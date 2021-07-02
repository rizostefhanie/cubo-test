
import * as bcrypt from "bcrypt";

export const validatePassword = ((password: string, passwordEncrypt: string) => {
    const resp = bcrypt.compareSync( passwordEncrypt,password);
    return resp;
});