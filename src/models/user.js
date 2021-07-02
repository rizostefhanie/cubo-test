import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName:  String, 
  lastName: String,
  username : string,
  password: string,
  email: string
});

export const user = mongoose.model('User', userSchema);
