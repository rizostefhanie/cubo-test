import express, { Router } from "express";
import {registerUser, loginUser} from "../service/user"

const router: Router = express.Router();

router.post("/", registerUser);
router.post("/login", loginUser);

export default router;