import mongoose from "../connection";
const userModel = new mongoose.Schema({
  name: String,
  age: Number,
});

export const User = mongoose.models.users || mongoose.model("users", userModel);
