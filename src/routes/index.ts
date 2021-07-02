import express, { Router } from "express";
import pokemon from "./pokemon"
import rol from "./rol"
import user from "./user"

const router: Router = express.Router();

router.use("/pokemon", pokemon);
router.use("/rol", rol);
router.use("/user", user);

export default router;