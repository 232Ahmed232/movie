const mongoose = require("mongoose");

var url = "mongodb+srv://ahmed:ahmed@cluster0.y4qsdmp.mongodb.net/sample_mflix"
mongoose.connect(url).then(() => { console.log("Connected to MongoDB"); }).catch((err) => { console.log(err); })




//   fetch(url)
//   .then(response => {
//     if (response.ok) {
//       console.log('Page exists');
//     } else {
//       console.log('Page does not exist');
//     }
//   })
//   .catch(error => {
//     console.error('An error occurred:', error);
//   });





var eschema = new mongoose.Schema({})
var db = mongoose.model("movies", eschema);

// 

// db.find({title:{ $regex: new RegExp('Iron',"i")} }).then((fitems) => {

//   fitems.forEach(element => {
//     console.log(element);
//   });

  
//   })



const express = require("express");
const ejs = require("ejs");
const bp = require("body-parser");


const app = express();

app.use(bp.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {

  db.find({ poster: { $ne: null }, year: { $gte: 2000 } }).limit(25).then((items) => {


    const plainObjects = items.map((item) => item.toObject());
    plainObjects.forEach(del =>{
      fetch(del.poster)
      .then(response => {
        if (response.ok) {
          // console.log('Page exists');
        } else {
          db.deleteOne({poster:del.poster}).then(()=>{
            console.log("Deleted");
          })
        }
      })
      .catch(error => {
        console.error('An error occurred:', error);
      });
    });



    res.render("index.ejs", { mov: plainObjects })
  });


})


app.get("/actor/:actor", (req, res) => {
  var actor = req.params.actor;
  db.find({ poster: { $ne: null }, cast: actor, year: { $gte: 2000 } }).limit(25).then((items) => {
    const plainObjects = items.map((item) => item.toObject());
    
    plainObjects.forEach(del =>{
      fetch(del.poster)
      .then(response => {
        if (response.ok) {
          // console.log('Page exists');
        } else {
          db.deleteOne({poster:del.poster}).then(()=>{
            console.log("Deleted");
          })
        }
      })
      .catch(error => {
        console.error('An error occurred:', error);
      });
    });
    
    
    
    // plainObjects.forEach(element => {
    //   // console.log(element.poster);
    // });
    
    res.render("index.ejs", { mov: plainObjects })
  });
})

app.get("/genere/:genres", (req, res) => {
  var genres = req.params.genres;
  db.find({ poster: { $ne: null }, genres: genres, year: { $gte: 2000 } }).limit(25).then((items) => {
    const plainObjects = items.map((item) => item.toObject());
    
    plainObjects.forEach(del =>{
      fetch(del.poster)
      .then(response => {
        if (response.ok) {
          // console.log('Page exists');
        } else {
          db.deleteOne({poster:del.poster}).then(()=>{
            console.log("Deleted");
          })
        }
      })
      .catch(error => {
        console.error('An error occurred:', error);
      });
    });
    
    
    // plainObjects.forEach(element => {
    //   // console.log(element.poster);
    // });
    res.render("index.ejs", { mov: plainObjects })
  });
})



app.get("/year/:year", (req, res) => {
  var y = req.params.year;
  var year = Number(y)
  db.find({ poster: { $ne: null },  year: year }).limit(25).then((items) => {
    const plainObjects = items.map((item) => item.toObject());
    
    plainObjects.forEach(del =>{
      fetch(del.poster)
      .then(response => {
        if (response.ok) {
          // console.log('Page exists');
        } else {
          db.deleteOne({poster:del.poster}).then(()=>{
            console.log("Deleted");
          })
        }
      })
      .catch(error => {
        console.error('An error occurred:', error);
      });
    });
    
    
    plainObjects.forEach(element => {
      // console.log(element.poster);
    });
    res.render("index.ejs", { mov: plainObjects })
  });
})

app.post("/",(req,res)=>{
  var sar = req.body.search;
  console.log(sar);
  res.redirect(`/search?sar=${sar}`);
})


app.get("/search", (req, res) => {
  var sar = req.query.sar;
  db.find({title:{ $regex: new RegExp(sar,"i")} }).then((items) => {
    const plainObjects = items.map((item) => item.toObject());
    
    plainObjects.forEach(del =>{
      fetch(del.poster)
      .then(response => {
        if (response.ok) {
          // console.log('Page exists');
        } else {
          db.deleteOne({poster:del.poster}).then(()=>{
            console.log("Deleted");
          })
        }
      })
      .catch(error => {
        // console.error('An error occurred:', error);
      });
    });
    
    
    // plainObjects.forEach(element => {
    //   // console.log(element.poster);
    // });
    res.render("index.ejs", { mov: plainObjects })
  });
})


app.get("/template/:name", (req, res) => {
  var name = req.params.name;
  // console.log(name);
  db.find({ poster: { $ne: null }, title: name }).limit(1).then((items) => {
    const plainObjects = items.map((item) => item.toObject());
    // plainObjects.forEach(element => {
    //   console.log(element);
    // });
    res.render("actor.ejs", { temp: plainObjects })
  });
})


app.get("/cont",(req,res)=>{
  res.render("contact")
})


app.listen(3000, () => {
  console.log("Server is Running");
})



