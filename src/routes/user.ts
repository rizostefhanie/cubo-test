import express, { Router } from "express";
import {registerUser} from "../service/user"

const router: Router = express.Router();

router.post("/", registerUser);

export default router;