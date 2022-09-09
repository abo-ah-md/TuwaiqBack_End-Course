const { log } = require("console");
const { create } = require("domain");
const fs= require ("fs")
const http = require("http");
const { type } = require("os");
const app =http.createServer();
http
  .createServer((req, res) => {
    fs.readFile("file.html",function(err,data){
        if (err){
            console.log(err);
        }
        else{
        {
            
        }
        res.writeHead(200,{"content-Type": "text/html"})
        res.write(data);
        return res.end()
    }
    })  
  }).listen(8080);



