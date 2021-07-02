import mongoose from 'mongoose';
const { Schema } = mongoose;


export interface IRol  {
  name:  string, 
  options: []
}

const rolSchema = new Schema({
  name:  String, 
  options: [{ type: Schema.Types.Mixed }],
});

export const Rol = mongoose.model('Rol', rolSchema);