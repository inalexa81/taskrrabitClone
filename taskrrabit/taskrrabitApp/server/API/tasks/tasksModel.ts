import mongoose from "mongoose";


const TaskSchema = new mongoose.Schema({
    taskUser: String,
    taskAction: String,
    taskLocation: String,
    taskDuration: String,
    taskDetails: String,
    chosenTasker: String,
    taskDate: Date,
})

const TaskModel = mongoose.model("tasks", TaskSchema )

export default TaskModel