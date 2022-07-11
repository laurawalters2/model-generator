
const { Schema, model } = require("mongoose");

const moment = require("moment");

const secondSchema = new Schema(
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


const Second = model("Second", secondSchema);

module.exports = Second;
