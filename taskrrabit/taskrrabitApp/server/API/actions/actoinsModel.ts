import mongoose from "mongoose";

const ActionSchema = new mongoose.Schema({
  category: {
    type: String,
    required: [true, "must enter category"],
  },
  action: String,
});
const ActionModel = mongoose.model("actions", ActionSchema);

export default ActionModel;
