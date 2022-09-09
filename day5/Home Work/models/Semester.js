
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const courses = require('./Courses').courses;
const students = require('./student').student;


const SemesterSchema = new Schema({
    number:Number
})



const semester = mongoose.model("semester",SemesterSchema);

module.exports = {semester}

