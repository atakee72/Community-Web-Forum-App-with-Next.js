import mongoose from "mongoose";

const topicsSchema = new mongoose.Schema({
  // topics: [{ title: String, body: String, date: miliseconds, comments: Number, views: Number }],

  title: {
    type: String,
  },

  body: {
    type: String,
  },

  author: { type: mongoose.Schema.Types.ObjectId, ref: "user" },

  date: {
    type: Number,
  },

  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "comment" }],

  views: { type: Number },

  likes: { type: Number },

  likedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],

  tags: [{ type: String }],
});

const topicModel = mongoose.model("topic", topicsSchema);

export default topicModel;
