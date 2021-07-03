import express, { Router } from "express";
import {addPokemon, modifyPokemon, removePokemon, findPokemon} from "../service/pokemon"
const router: Router = express.Router();

router.post("/", addPokemon);
router.put("/:id", modifyPokemon);
router.delete("/:id", removePokemon);
router.post("/all", findPokemon)

export default router;