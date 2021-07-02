import express, { Router } from "express";
import {addPokemon, modifyPokemon, removePokemon} from "../service/pokemon"
const router: Router = express.Router();

router.post("/", addPokemon);
router.put("/:id", modifyPokemon);
router.delete("/:id", removePokemon);


export default router;