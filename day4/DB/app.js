const express = require("express");
const mongoose = require("mongoose");

const User = require("./models/user");
const product = require("./models/store");



require("dotenv").config();
mongoose.connect(process.env.dbConnect, { useNewUrlParser: true });

const app = express();

app.use(express.json());

/*
User.create(
  {
    firstName: "mohammad",
    lastName: "ahmed",
    birthDate: new Date ("10/6/2021") ,
    isMarried:true,
  },
  (error, user) => {
    console.log(error, user);
  }

);

User.create(
  {
    firstName: "fahad",
    lastName: "naaim",
    birthDate: new Date ("10/9/2002") ,
    isMarried:false,
  },
  (error, user) => {
    console.log(error, user);
  }

);
User.create(
  {
    firstName: "khalid",
    lastName: "salih",
    birthDate: new Date ("1/6/1994") ,
    isMarried:true,
  },
  (error, user) => {
    console.log(error, user);
  }

);


product.create({
  productName:"beans",
  amount:3,
  distributors:["goody","maraai","californea"]
},(error,product)=>{
  console.log(error,product);
})

product.create({
  productName:"water",
  amount:91,
  distributors:["acuafina","hana","tania"]
},(error,product)=>{
  console.log(error,product);
})

product.create({
  productName:"tuna",
  amount:60,
  distributors:["goody","rumary","sardah"]
},(error,product)=>{
  console.log(error,product);
})


User.find({isMarried:false}, (error, blogspot) => {
  console.log(error, blogspot)
})

*/

console.log("sdsd");

//let id ="630fc7e476849ced722471d3";
//product.findByIdAndUpdate(id,{$push:{distributors:"awww"}},(er,product) => console.log(er,product))



prID="630fbda164dc3e33e805a9c1"
User.findByIdAndDelete(prID,(er,user)=> console.log(er,user))

  /*

app.get("/", function (req, res) {
  res.send("Hello World");
});

*/

app.listen(3000);
