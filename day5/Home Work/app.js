const express = require('express');
const mongoose = require('mongoose');

const dotenv = require('dotenv').config();
const app = express();


//test for creating documents



app.use(express.json());
const DBURI = "mongodb://localhost:27017";
mongoose.connect(DBURI, { useNewUrlParser: true, useUnifiedTopology: true });



app.post("/",(req,res)=>{
    
   

    
   /* const courses = new students(req.body);
    courses.save().then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });*/



})










const PORT = "3000";
app.listen(PORT,()=> console.log("started"));