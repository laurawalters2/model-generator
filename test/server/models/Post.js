
const { Schema, model } = require("mongoose");

const moment = require("moment");

const PostSchema = new Schema(
  {
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);


const Post = model("Post", PostSchema);

module.exports = Post;
