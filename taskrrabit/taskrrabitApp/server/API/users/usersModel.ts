import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        requiered: [true, "must enter email"],
    },
    password : String,
    firstName : String,
    lastName : String,
    phone : String,
    zipCode : String,
})

const UserModel = mongoose.model("users", UserSchema)

export default UserModel