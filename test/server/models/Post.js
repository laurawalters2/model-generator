
const { Schema, model } = require("mongoose");

const moment = require("moment");

const postSchema = new Schema(
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


const Post = model("Post", postSchema);

module.exports = Post;
