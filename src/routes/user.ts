import express, { Router } from "express";
import {registerUser, findUsers} from "../service/user"

const router: Router = express.Router();

router.post("/", registerUser);
router.post("/all", findUsers)

export default router;