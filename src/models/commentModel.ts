import mongoose from "mongoose";

const commentsSchema = new mongoose.Schema({
  body: {
    type: String,
  },

  author: { type: mongoose.Schema.Types.ObjectId, ref: "user" },

  // userName: { type: mongoose.Schema.Types.String, ref: "user" },

  date: {
    type: Number,
  },

  upvotes: { type: Number },

  relevantPostId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "relevantPostId",
  },
});

const commentModel = mongoose.model("comment", commentsSchema);

export default commentModel;
