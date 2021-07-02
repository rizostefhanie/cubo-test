import express, { Router } from "express";
import {createPokemon, deletePokemon, updatePokemon} from "../service/pokemon"
const router: Router = express.Router();

router.post("/", createPokemon);
router.put("/:id", updatePokemon);
router.delete("/:id", deletePokemon);
router.delete("/:id", deletePokemon);
export default router;