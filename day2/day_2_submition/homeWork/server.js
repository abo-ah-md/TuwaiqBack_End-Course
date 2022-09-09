const { log } = require("console");
const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/user", (req, res) => {
    res.sendFile(__dirname + "/public/user.html");
  });

  app.get("/cats", (req, res) => {
    res.sendFile(__dirname + "/public/cats.html");
  });

app.listen(3000, () => {
  console.log("server started");
});
