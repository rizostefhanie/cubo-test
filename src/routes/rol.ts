import express, { Router } from "express";
import {createRol} from "../service/rol"

const router: Router = express.Router();

router.post("/", createRol);

export default router;