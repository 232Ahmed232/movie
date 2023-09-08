const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");



var url = "mongodb+srv://ahmed:ahmed@cluster0.y4qsdmp.mongodb.net/sample_mflix"
mongoose.connect(url).then(() => { console.log("Connected to MongoDB"); }).catch((err) => { console.log(err); })
var url2 = "mongodb+srv://ahmed:ahmed@cluster0.y4qsdmp.mongodb.net/sample_mflix"
mongoose.connect(url2).then(() => { console.log("Connected to MongoDB22"); }).catch((err) => { console.log(err); })


var eschema = new mongoose.Schema({
  name: String,
  img: String,
  plot: String,
  fullplot: String,
  cast: [],
  writers: [],
  imdbrat: Number,
  imdbvotes: Number,
  year: Number,
  url: String,
  category: String
})
var db = mongoose.model("movies", eschema);
var db2 = mongoose.model("amovi", eschema);

// 



// let movie
// db.findOne({ title: "Iron Man" }).then((element) => {
  // const plainObjects = fitems.map((item) => item.toObject());
  // // plainObjects.forEach(element => {
  // //     console.log(Object.keys(element));
  // // });
  // const modifiedUsers = fitems.map(user => {
  //     // Add additional data or modify existing data
  //     return {
  //       ...user._doc, // Spread the existing user data
  //       cate: `marvel` // Add a new field with additional data
  //     };
  // plainObjects.forEach(element => {
    // var movie = new db2({
    //   name: element.title,
    //   img: element.poster,
    //   plot: element.plot,
    //   fullplot: element.fullplot,
    //   cast: element.cast,
    //   writers: element.writers,
    //   imdbrat: element.imdb.rating,
    //   imdbvotes: element.imdbrat.votes,
    //   year: element.year,
    //   url: "www.",
    //   category: "Marvel"
    // })

  // });
//   movie.save().then(()=>{console.log("Saved to Db2");}).catch((e)=>{console.log(e);})
// });




db.findOne({title:"Iron Man"}).then((element)=>{
  console.log(element);
   var movie = new db2({
      name: element.title,
      img: element.poster,
      plot: element.plot,
      fullplot: element.fullplot,
      cast: element.cast,
      writers: element.writers,
      imdbrat: 500,
      imdbvotes: 15,
      year: element.year,
      url: "www.",
      category: "Marvel"
    })
    movie.save().then(()=>{console.log("Saved to Db2");}).catch((e)=>{console.log(e);})

})



//   console.log(modifiedUsers);







const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

