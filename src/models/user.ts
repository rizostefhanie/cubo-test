import mongoose from 'mongoose';
import * as bcrypt from "bcrypt";

const { Schema } = mongoose;

export interface IUser  {
  firstName:  string, 
  lastName:  string, 
  username:  string, 
  password:  string, 
  email:  string, 
  rol:  string, 
}

const userSchema = new Schema({
  firstName:  String, 
  lastName: String,
  username : String,
  password: String,
  email: String,
  rol: { type: Schema.Types.ObjectId, ref: "Rol" },
  
});
// Encrypt Password
userSchema.pre("save", function(this: IUser, next) {
  const saltRounds = 10;
  const self = this;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(self.password, salt);
  this.password = hash;
  next();
});


export const User = mongoose.model('User', userSchema);
