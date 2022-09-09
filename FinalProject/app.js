const express = require("express");
const mongoose = require("mongoose");
const env=require("dotenv").config()
//----------------required Models-----------//
const User = require("./models/userModel");
const Space = require("./models/spaceModel");
const Project = require("./models/projectModel");
//----------------required Routes-----------//
const userRoutes = require("./routes/userRoutes");
const spaceRoutes = require("./routes/spaceRoutes");
const projectRoutes = require("./routes/projectRoutes");

const app = express();
app.use(express.json()); 

const DBURI=process.env.DBURI||"mongodb://localhost:27017/splace"
mongoose.connect(DBURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.static(__dirname + "/public"));

//------------------------------------------------------//middleware\\---------------------------------------------------------

app.use("/user", userRoutes);
app.use("/space", spaceRoutes);
app.use("/project", projectRoutes);

//-------------------------------------------------------------------------------------------------------------------------

//main page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

//port listening
const port=process.env.PORT||3000

app.listen(port, () => {
  console.log("started");
});
