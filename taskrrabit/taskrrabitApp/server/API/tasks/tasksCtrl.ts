import express from "express";
import TaskModel from "./tasksModel";

export async function createTask(req: express.Request, res: express.Response) {
    try {
        console.log("taskCtrl")
        const {taskUser, taskAction, taskLocation, taskDuration, taskDetails, chosenTasker, taskDate } = req.body;
        if( 
            !taskUser || !taskAction || !taskLocation || !taskDuration || !taskDetails || !chosenTasker || !taskDate 
          )
        throw new Error("on file taskCtrl on function createTask: missing information ");
             
    } catch (error) {
        
    }
}