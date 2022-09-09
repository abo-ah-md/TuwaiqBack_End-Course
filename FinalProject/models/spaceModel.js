const { timeStamp } = require("console");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const spaceSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    rooms: [
      {
        user: { type: Schema.Types.ObjectId, ref: "user" },
        title: String,
      },
    ],
    admin: { type: Schema.Types.ObjectId, ref: "user" },
    inSpace: [{ type: Schema.Types.ObjectId, ref: "user", unique: true }],
    project: [{ type: Schema.Types.ObjectId, ref: "project" }],
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const space = (module.exports = mongoose.model("space", spaceSchema));
