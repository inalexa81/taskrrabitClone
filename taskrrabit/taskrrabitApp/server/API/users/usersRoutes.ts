
import express from 'express';
import { register, getUser, login } from "./usersCtrl";

const router = express.Router();

router
.post("/", register)
.get("/get-user-by-cookie", getUser)
.post("/login", login)


export default router