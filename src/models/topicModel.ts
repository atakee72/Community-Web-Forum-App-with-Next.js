import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
  {
    title: String,
    body: String,
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "comment" }],
    views: Number,
    likes: Number,
    likedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    tags: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;
