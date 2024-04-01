import express from "express";
import { getTasker, getTaskerBycategory, loginTasker, registerTasker } from "./taskersCtrl";



const router = express.Router();

router
.post("/register-tasker", registerTasker)
.get("/get-tasker-by-cookie", getTasker)
.post("/login-tasker", loginTasker)
.get("/get-taskers-by-category", getTaskerBycategory)

export default router