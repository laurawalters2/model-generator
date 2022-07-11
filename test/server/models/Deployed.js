
const { Schema, model } = require("mongoose");

const moment = require("moment");

const deployedSchema = new Schema(
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


const Deployed = model("Deployed", deployedSchema);

module.exports = Deployed;
