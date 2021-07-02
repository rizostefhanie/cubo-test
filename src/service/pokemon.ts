import { Request, Response } from "express";
import { Pokemon, IPokemon } from "../models/pokemon"

export const addPokemon = async (req: Request, resp: Response) => {
  try {
    let pokemon: IPokemon = req.body;
    let pokemonModel = new Pokemon(pokemon)
    await pokemonModel.save()
    resp.status(200);
    resp.json({ message: "OK" });
  } catch (error) {
    resp.status(500);
    resp.json({ message: "Error : " + error });
  }
}

export const modifyPokemon = async (req: Request, resp: Response) => {
  try {
    const pokemon = await Pokemon.findById(req.params.id).exec();
    if (pokemon) {
      pokemon.set(req.body);
      await pokemon.save();
      resp.status(200);
      resp.json({ message: "Updated" });
    } else {
      resp.status(200);
      resp.json({ message: "Not Found" });
    }
  } catch (error) {
    resp.status(500);
    resp.json({ message: "Error : " + error });
  }
}
export const removePokemon = async (req: Request, resp: Response) => {
  try {
    await Pokemon.findByIdAndDelete(req.params.id).exec();
    resp.status(200);
    resp.json({ message: "OK" });
  } catch (error) {
    resp.status(500);
    resp.json({ message: "Error : " + error });
  }
}

export const findPokemon = async (req: Request, resp: Response) => {
  try {
    let pokemonModel = new Pokemon()
    const pokemons = pokemonModel.find(req.body.filter)
    .limit(req.body.limit)
    .skip(((req.body.pageNumber - 1) * req.body.limit))
    .exec();
    resp.status(200);
    resp.json({ message: "OK", data: pokemons });
  } catch (error) {
    resp.status(500);
    resp.json({ message: "Error : " + error });
  }
}
