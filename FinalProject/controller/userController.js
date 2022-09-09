const mongoose = require("mongoose");
const express = require("express");

//------------------------------------------------------//requireing Models\\---------------------------------------------------------

const User = require("../models/userModel");
const Space = require("../models/spaceModel");
const Project = require("../models/projectModel");

//------------------------------------------------------//newUser\\---------------------------------------------------------
//regester a new user
module.exports.user_create_post = async (req, res) => {
  try {
    const user = await new User(req.body).save();
    res.send(user);
  } catch (er) {
    res.send("failed");
    console.log(er);
  }
};
//------------------------------------------------------//showing user info\\---------------------------------------------------------
//show user info
module.exports.user_view_info = async (req, res) => {
  const username = req.params.name;
  try {
    const showUserInfo = await User.find({
      userName: username,
      isDeleted: false,
    })
      .populate("createdSpace")
      .populate("inSpace")
      .populate("inproject");

    res.send(showUserInfo);
  } catch (er) {
    console.log(er);
  }
};
//show users info
module.exports.users_view_info = async (req, res) => {
  try {
    const showUserInfo = await User.find({ isDeleted: false })
      .populate("createdSpace")
      .populate("inSpace")
      .populate("inproject");

    res.send(showUserInfo);
  } catch (er) {
    console.log(er);
  }
};
//------------------------------------------------------//updating user info\\---------------------------------------------------------
module.exports.updatingUSerInfo = async (req, res) => {
  try {
    const userName = req.params.name;

    const updateUserInfo = await User.findOneAndUpdate(
      { userName: userName },
      req.body
    );
    const showUserInfo = await User.find({ userName: userName })
      .populate("createdSpace")
      .populate("inSpace")
      .populate("inproject");

    res.send(showUserInfo);
  } catch (er) {
    console.log(er);
  }
};
//------------------------------------------------------//deleting user info\\---------------------------------------------------------
module.exports.deletingUserInfo = async (req, res) => {
  try {
    const userName = { userName: req.params.name };

    const updatinguserInfo = await User.findOneAndUpdate(userName, {
      isDeleted: true,
    });

    await console.log();
    res.send("deleted");
  } catch (er) {
    console.log(er);
  }
};
