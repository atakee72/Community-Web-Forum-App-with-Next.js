import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },

  firstName: {
    type: String,
  },

  surName: {
    type: String,
  },

  birthDay: {
    type: Number,
  },

  eMail: {
    type: String,
    required: true,
    unique: true,
  },

  roleBadge: {
    type: String,
  },

  passWord: {
    type: String,
    required: true,
  },

  userPicture: {
    type: String,
  },

  hobbies: { type: Array },

  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "comment" }],

  topics: [{ type: mongoose.Schema.Types.ObjectId, ref: "topic" }],
  announcements: [
    { type: mongoose.Schema.Types.ObjectId, ref: "announcement" },
  ],
  recommendations: [
    { type: mongoose.Schema.Types.ObjectId, ref: "recommendation" },
  ],

  likes: [{ type: String }],
});

const userModel = mongoose.model("user", userSchema);

export default userModel;
