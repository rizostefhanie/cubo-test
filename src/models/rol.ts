import mongoose from 'mongoose';
const { Schema } = mongoose;

const rolSchema = new Schema({
  name:  String, 
  options: [String],
});

export const Rol = mongoose.model('Rol', rolSchema);