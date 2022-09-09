const mongoose = require("mongoose");
const express = require("express");

//------------------------------------------------------//requireing Models\\---------------------------------------------------------
const User = require("../models/userModel");
const Space = require("../models/spaceModel");
const Project = require("../models/projectModel");

//------------------------------------------------------//create\\---------------------------------------------------------
//regester a new project
module.exports.newProject = async (req, res) => {
  try {
    const creator = req.body.createdBy;
    const newproject = new Project({
      name: req.body.name,
      discribtion: req.body.discribtion,
      createdBy: req.body.createdBy,
    }).save();

    const projectRef = (await newproject)._id;
    const updateprojectAddedToUser = await User.findByIdAndUpdate(creator, {
      $push: { inproject: projectRef },
    });
    const showProject = await Project.findById(projectRef);

    await res.send(showProject);
  } catch (er) {
    console.log(er);
  }
};
//------------------------------------------------------//show info\\---------------------------------------------------------
//show project Info
module.exports.showProject = async (req, res) => {
  try {
    const projectID = req.params.id;
    const showProjectInfo = await Project.find({
      _id: projectID,
      isDeleted: false,
    }).populate("createdBy");
    res.send(showProjectInfo);
  } catch (er) {
    console.log(er);
  }
};
//show projects Info
module.exports.showProjects = async (req, res) => {
  try {
    const showProjectInfo = await Project.find({ isDeleted: false }).populate(
      "createdBy"
    );
    await res.send(showProjectInfo);
  } catch (er) {
    console.log(er);
  }
};
//------------------------------------------------------//update\\---------------------------------------------------------
//updating project info
module.exports.updateProjects = async (req, res) => {
  try {
    const updateProjectInfo = await Project.findByIdAndUpdate(
      req.params.id,
      req.body
    );

    const showProjectInfo = await Project.findById(req.params.id).populate(
      "createdBy"
    );
    await res.send(showProjectInfo);
  } catch (er) {
    console.log(er);
  }
};
//------------------------------------------------------//Delete\\---------------------------------------------------------
//delete project
module.exports.deleteProject = async (req, res) => {
  try {
    const projectID = req.params.id;
    const userID = req.body.id;
    const removeProject = await Project.findByIdAndUpdate(projectID, {
      isDeleted: true,
    });

    const deletedUserInProject = await User.findByIdAndUpdate(userID, {
      $pull: { inproject: projectID },
    });
    res.send("deleted");
  } catch (err) {
    console.log(err);
  }
};
