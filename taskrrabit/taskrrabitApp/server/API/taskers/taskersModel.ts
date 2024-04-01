import mongoose from "mongoose";

const TaskerSchema = new mongoose.Schema({
    taskerEmail: {
        type: String,
        unique: true,
        requiered: [true, "must enter email"],
    },
    taskerPassword : String,
    taskerFirstName : String,
    taskerLastName : String,
    taskerPhone : String,
    hourlyRate: String,
    taskerCategory: String,
    taskerPhoto: String,
    taskerAbout: String,
})

const TaskerModel = mongoose.model("taskers", TaskerSchema)

export default TaskerModel