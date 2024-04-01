import express from "express";
import bcrypt from "bcrypt";
import jwt from "jwt-simple";
import TaskerModel from "./taskersModel";
import ActionModel from "../actions/actoinsModel";

const saltRounds = 10;

export async function registerTasker(req: express.Request, res: express.Response) {
    try {
        console.log("taskerCtrl");
        const {taskerFirstName, taskerLastName, taskerEmail, taskerPassword,  taskerPhone, taskerPhoto,hourlyRate,taskerCategory,taskerAbout} = req.body;
        if(
            !taskerFirstName || !taskerLastName || 
            !taskerEmail || !taskerPassword ||
             !taskerPhone || !hourlyRate || !taskerCategory || !taskerAbout
            ) 
        throw new Error("on file taskerCtrl on function registerTasker: missing information "); 

        const hash = await bcrypt.hash(taskerPassword, saltRounds);

        const taskerDB = new TaskerModel({taskerFirstName, taskerLastName,taskerEmail , taskerPassword: hash,taskerPhoto, hourlyRate,taskerCategory, taskerAbout });
        await taskerDB.save();
        console.log(taskerDB)

        const cookie = {taskerId: taskerDB._id};
        const secret = process.env.JWT_SECRET;
        if(!secret) throw new Error("On file taskerCtrl on function registerTasker: no secret"); 

        const JWTCookie = jwt.encode(cookie, secret)

        res.cookie("ID", JWTCookie);
        taskerDB.taskerPassword = null;
        res.send({registerTasker: true, taskerDB})

        console.log(taskerDB)
        

    } catch (error) {
        res.send({registerTasker: false, error: error.message})
    }
}

export async function loginTasker(req: express.Request, res: express.Response) {
    try {
        const { taskerEmail, taskerPassword } = req.body;

        if (!taskerEmail || !taskerPassword) {
            throw new Error("Email and password are required.");
        }

        const tasker = await TaskerModel.findOne({ taskerEmail });

        if (!tasker) {
            throw new Error("Tasker not found.");
        }

        const isTaskerPasswordValid = await bcrypt.compare(taskerPassword, tasker.taskerPassword);

        if (!isTaskerPasswordValid) {
            throw new Error("Invalid password.");
        }

        const token = jwt.encode({ taskerId: tasker._id }, process.env.JWT_SECRET || '');

        res.cookie("token", token);
        res.json({ success: true, tasker });
        console.log( tasker )
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
}



export async function getTasker(req: express.Request, res: express.Response) {
    try {
        const secret = process.env.JWT_SECRET;
        if (!secret) throw new Error("Couldn't load secret from .env");
  
        const { taskerID } = req.cookies;
        if (!taskerID) throw new Error("Couldn't find tasker from cookies");
  
        const decodedTaskerId = jwt.decode(taskerID, secret);
        const { taskerId } = decodedTaskerId;
  
        const taskerDB = await TaskerModel.findById(taskerId);
        if (!taskerDB) throw new Error(`Couldn't find tasker id with the id: ${taskerDB}`);
        
        res.send({ taskerDB });
    } catch (error) {
        res.send({ error: error.message })
    }
  }


export async function getTaskerBycategory(req: express.Request, res: express.Response) {
    try {
        const { action } = req.params;

        const actionData = await ActionModel.findOne({ name : action});
        if (!actionData) {
            return res.status(404).json({ message : "Action not Found"});
        }

        const { category } = actionData;

        const taskers = await TaskerModel.find({ taskerCategory : category });

        res.status(200).json(taskers);
    } catch (error) {
        console.error("Error fetching taskers by action: ", error);
        res.status(500).json({ message : "Server error" })
    }

}