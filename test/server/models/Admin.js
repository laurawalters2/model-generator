
const { Schema, model } = require("mongoose");

const moment = require("moment");

const adminSchema = new Schema(
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


const Admin = model("Admin", adminSchema);

module.exports = Admin;
