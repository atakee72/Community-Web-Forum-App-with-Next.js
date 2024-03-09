import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
  {
    title: { type: String, required: true }, // Title should be required
    body: { type: String, required: true }, // Body should be required
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "comment" }],
    views: { type: Number, default: 0 }, // Default views to 0
    likes: { type: Number, default: 0 }, // Default likes to 0
    likedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    tags: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;



// import mongoose, { Schema } from "mongoose";

// const topicSchema = new Schema(
//   {
//     title: String,
//     body: String,
//     comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "comment" }],
//     views: Number,
//     likes: Number,
//     likedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
//     tags: [{ type: String }],
//   },
//   {
//     timestamps: true,
//   }
// );

// const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

// export default Topic;
