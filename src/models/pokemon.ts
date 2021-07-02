import mongoose from 'mongoose';
const { Schema } = mongoose;

export interface IPokemon  {
  name:  string, 
  type: string,
  powerLevel : number
}

const pokemonSchema = new Schema({
  name:  String, 
  type: String,
  powerLevel : Number
});

export const Pokemon = mongoose.model('Pokemon', pokemonSchema);