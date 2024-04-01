import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import cors from 'cors';


const app = express();

dotenv.config();

const mongodb_uri = process.env.MONGO_URI
const PORT = process.env.PORT

mongoose.connect(mongodb_uri).then((res) => {
    console.log("connected to DB")
}).catch((err) => {
    console.log("At mongoose connect:")
    console.log(err.message)
})

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

import usersRoutes from "./API/users/usersRoutes";
app.use("/api/users", usersRoutes);

import actionsRoutes from "./API/actions/actionsRoutes";
app.use("/api/actions", actionsRoutes);

import taskersRoutes from "./API/taskers/taskersRoutes";
app.use("/api/taskers", taskersRoutes);


app.listen(PORT,() => {
    console.log(`server is listenning on port : ${PORT}`);
})