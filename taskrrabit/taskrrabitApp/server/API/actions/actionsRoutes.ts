import express from "express";
import { createAction, getActions, getCategories } from "./actionsCtrl";


const router = express.Router();

router
.post("/create-action", createAction)
.get("/get-categories", getCategories)
.get("/get-actions", getActions)



export default router