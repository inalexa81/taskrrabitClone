
import express from 'express';
import { register, getUser } from "./usersCtrl";

const router = express.Router();

router
.get("/get-user-by-cookie", getUser)
.post("", register)


export default router