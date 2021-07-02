import express, { Router } from "express";
import pokemon from "./pokemon"

const router: Router = express.Router();


router.use("/pokemon", pokemon);


export default router;