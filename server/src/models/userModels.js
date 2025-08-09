import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  phone: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    enum: ["Admin", "User", "Recruiter"],
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  photo: {
    type:String,
    default:"",
  },
},
  {timestamps : true}
);

const User = mongoose.model("User", userSchema);

export default User;
