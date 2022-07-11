
const { Schema, model } = require("mongoose");

const moment = require("moment");

const tripSchema = new Schema(
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


const Trip = model("Trip", tripSchema);

module.exports = Trip;
