const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const semester = require('./Semester').semester;
const student = require('./student').student;






const CoursesSchema = new Schema({
courseInfo:{
    type:String,
    required:true,
},
semester:{
    type:String,
    
},


},{ timestamps: true })


const courses = mongoose.model("courses",CoursesSchema);
module.exports = {courses};
