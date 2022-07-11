
const { Schema, model } = require("mongoose");

const moment = require("moment");

const fifthSchema = new Schema(
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


const Fifth = model("Fifth", fifthSchema);

module.exports = Fifth;
