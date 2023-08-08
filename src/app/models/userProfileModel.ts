import mongoose, { Schema } from "mongoose";

const userProfileSchema = new Schema({
  fullname: {
    type: String,
    required: [true, "Name is required."],
    trim: true,
    minLength: [3, "Name must be longer than 3 characters."],
    maxLength: [50, "Name must be shorter than 50 stripVTControlCharacters."],
  },

  email: {
    type: String,
    required: [true, "Email is required."],
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i, "Invalid email address"],
  },

  message: {
    type: String,
    required: [true, "Message is required."],
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const UserProfileModel =
  mongoose.models.userProfile ||
  mongoose.model("userProfileModel", userProfileSchema);

export default UserProfileModel;
