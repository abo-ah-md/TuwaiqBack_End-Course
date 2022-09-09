const mongoose = require("mongoose");
const express = require("express");

//------------------------------------------------------//requireing Models\\---------------------------------------------------------
const User = require("../models/userModel");
const Space = require("../models/spaceModel");
const Project = require("../models/projectModel");

//------------------------------------------------------//newSpace\\---------------------------------------------------------
//registerNew space;
module.exports.newSpace_post = async (req, res) => {
  const creator = req.params.id;

  try {
    const newSpace = new Space({
      title: req.body.title,
      admin: req.params.id,
      inSpace: req.params.id,
    }).save();

    const spaceRef = (await newSpace)._id;
    // const spaceName = space.find({ title: req.body.title })._id;

    const updateduserAddedTosapace = await User.findByIdAndUpdate(creator, {
      $push: { inSpace: spaceRef },
    });

    const updatedusersapaceCreation = await User.findByIdAndUpdate(creator, {
      $push: { createdSpace: spaceRef },
    });

    const showSpacesInfo = await Space.findById(spaceRef)
      .populate("rooms.user")
      .populate("admin")
      .populate("inSpace")
      .populate("project");

    await res.send(showSpacesInfo);
  } catch (er) {
    console.log(er);
  }
};
//------------------------------------------------------//showing infos\\---------------------------------------------------------

//show spaces Info
module.exports.viewSpaces = async (req, res) => {
  try {
    const showSpaceInfo = await Space.find({ isDeleted: false })
      .populate("rooms.user")
      .populate("admin")
      .populate("inSpace")
      .populate("project");

    res.send(showSpaceInfo);
  } catch (er) {
    console.log(er);
  }
};
//show space Info
module.exports.viewSpace = async (req, res) => {
  try {
    const showSpacesInfo = await Space.find({
      _id: req.params.spaceID,
      isDeleted: false,
    })
      .populate("rooms.user")
      .populate("admin")
      .populate("inSpace")
      .populate("project");
    res.send(showSpacesInfo);
  } catch (er) {
    console.log(er);
  }
};
//updating space new space member
module.exports.spaceNewMember_put = async (req, res) => {
  try {
    const Userid = req.body.userID;
    const spaceID = req.params.spaceID;

    const updatedSpace = await Space.findByIdAndUpdate(spaceID.trim(), {
      $push: { inSpace: Userid },
    });
    const updateduserAddedTosapace = await User.findByIdAndUpdate(Userid, {
      $push: { inSpace: spaceID.trim() },
    });

    const result = await Space.find({ spaceID });

    res.send(result);
  } catch (er) {
    console.log(er);
  }
};
////updating   removing  member from space
module.exports.removeUserFromSpace = async (req, res) => {
  try {
    const spaceID = req.params.spaceID;
    const userID = req.body.userID;

    const removeSpaceUser = await Space.findByIdAndUpdate(spaceID, {
      $pull: { inSpace: userID.trim() },
    });

    const updateduserAddedTosapace = await User.findByIdAndUpdate(userID, {
      $pull: { inSpace: spaceID.trim() },
    });
    res.send("deleted");
  } catch (er) {
    console.log(er);
  }
};
////updating   removing member from room
module.exports.leaveRoom = async (req, res) => {
  try {
    const userID = req.body.user;
    const spaceID = req.params.spaceID;
    const removeSpaceUser = await Space.findByIdAndUpdate(spaceID, {
      $pull: { rooms: { user: userID } },
    });

    res.send("deleted");
  } catch (er) {
    console.log(er);
  }
};
//update new room user;
module.exports.newRoom_put = async (req, res) => {
  try {
    const spaceID = req.params.id;
    const userID = req.body.user;
    const updatedSpace = await Space.findByIdAndUpdate(spaceID, {
      $push: {
        rooms: {
          user: userID,
          title: req.body.title,
        },
      },
    });
    const showNewRoom = await Space.find(
      { _id: spaceID },
      { rooms: { title: req.body.title, user: userID } }
    );
    res.send(showNewRoom);
  } catch (er) {
    console.log(er);
  }
};
//------------------------------------------------------//Delete\\---------------------------------------------------------
//delete a space
module.exports.deleteSpace = async (req, res) => {
  try {
    const spaceID = req.params.id;
    const userID = req.body.id;
    const removeSpace = await Space.findByIdAndUpdate(spaceID, {
      isDeleted: true,
    });

    const deletedUserInspace = await User.findByIdAndUpdate(userID, {
      $pull: { inSpace: spaceID },
    });

    const deletedSpaceFromCreator = await User.findByIdAndUpdate(userID, {
      $pull: { createdSpace: spaceID },
    });
    res.send("deleted");
  } catch (err) {
    console.log(err);
  }
};
