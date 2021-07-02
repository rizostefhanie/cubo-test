import mongoose from 'mongoose';
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

export const User = mongoose.model('User', userSchema);
