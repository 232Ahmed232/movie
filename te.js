const express = require("express");
const ejs = require("ejs");
const bp = require("body-parser");
const mongoose = require("mongoose");


var url = "mongodb+srv://ahmed:ahmed@cluster0.y4qsdmp.mongodb.net/sample_mflix"
mongoose.connect(url).then(() => { console.log("Connected to MongoDB"); }).catch((err) => { console.log(err); })




var eschema = new mongoose.Schema({})
var db = mongoose.model("embedded_movies", eschema);

// 

db.find({} ).then((fitems) => {

  fitems.forEach(element => {
    console.log(element);
  });

  
  })




const app = express();
app.set("view engine","ejs");
app.use(bp.urlencoded({ extended: true }));
app.use(express.static("public"));

