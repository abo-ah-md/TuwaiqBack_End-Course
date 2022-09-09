const mongoose = require("mongoose");
const express = require("express");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    userName: { type: String, required: true, unique: true },
    firstName: { type: String },
    lastName: { type: String },
    createdSpace: [{ type: Schema.Types.ObjectId, ref: "space" }],
    inSpace: [{ type: Schema.Types.ObjectId, ref: "space" }],
    inproject: [{ type: Schema.Types.ObjectId, ref: "project" }],
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const user = (module.exports = mongoose.model("user", UserSchema));
