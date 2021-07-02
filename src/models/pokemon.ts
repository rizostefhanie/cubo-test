import mongoose from 'mongoose';
const { Schema } = mongoose;

const pokemonSchema = new Schema({
  name:  String, 
  type: String,
  powerLevel : Number
});

export const pokemon = mongoose.model('Pokemon', pokemonSchema);