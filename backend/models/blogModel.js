import mongoose from "mongoose";

const blogSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    image_1: {
      type: String,
      required: true,
    },
    description_1: {
      type: String,
      required: true,
    },
    image_2: {
      type: String,
    },
    description_2: {
      type: String,
    },
    image_3: {
      type: String,
    },
    description_3: {
      type: String,
    },
    category: {
      type: String,
      required: true,
    },
    views: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
