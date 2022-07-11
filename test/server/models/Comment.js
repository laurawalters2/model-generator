
const { Schema, model } = require("mongoose");

const moment = require("moment");

const commentSchema = new Schema(
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


const Comment = model("Comment", commentSchema);

module.exports = Comment;
