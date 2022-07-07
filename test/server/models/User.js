
const { Schema, model } = require("mongoose");

const moment = require("moment");

const UserSchema = new Schema(
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


const User = model("User", UserSchema);

module.exports = User;
