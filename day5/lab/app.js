const express = require("express");
const mongoose = require("mongoose");
const Blog = require("./models/Blogpost");
const Schema = mongoose.Schema;


const app = express();

app.use(express.json())
mongoose.connect(
  process.env.DBPORT || "mongodb://localhost:27017/my_database",
  { useNewUrlParser: true },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("database is connected");
    }
  }
);

app.post("/blogs", (req, res) => {
  const blog = new Blog(req.body);
  blog.save()
    .then((result) => {
      res.send(blog);
    })
    .catch((err) => {
      console.log(err);
    });
});


app.get("/blogs",(req,res)=>{
    Blog.find().sort({createdAt:-1}).then(result=>{
        res.json({blog:result,title:"all blogs"})
    }).catch(err=>{console.log(err);})
})


app.get("/blogs/:id",(req,res)=>{
    const id= req.params.id;
    Blog.findById(id).then(result=>{
        res.json({blog:result,title:"blog detail"})
    }).catch(err=>{console.log(err);})
})

app.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;
    
    Blog.findByIdAndDelete(id)
      .then(result => {
        res.send("Blog item deleted");
      })
      .catch(err => {
        console.log(err);
      });
  });

app.use(express.json);
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("started"));
