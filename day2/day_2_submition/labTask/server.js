const { log } = require("console");
const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/node", (req, res) => {
    res.sendFile(__dirname + "/public/node.html");
  });

  app.get("/gallery", (req, res) => {
    res.sendFile(__dirname + "/public/gallery.html");
  });

app.listen(3000, () => {
  console.log("server started");
});
