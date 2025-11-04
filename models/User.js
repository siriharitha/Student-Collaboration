import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,          // removes extra spaces
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,     // ensures email is stored in lowercase
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);
export default User;
