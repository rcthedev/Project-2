const express = require("express");
// const axios = require("axios")
const PORT = process.env.PORT || 8080;
const apiRequests = require("./apiRequests")
const mysql = require("mysql");
// apiRequests.requestWeather("Atlanta")

  // *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
// var express = require("express");
// Sets up the Express App
// =============================================================
var app = express();
// const PORT = process.env.PORT || 8080;
// Requiring our models for syncing
var db = require("./models");
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Static directory
app.use(express.static("public"));


function populatedb() {
  db.Question.create({
    text: "favorite color?",
    choice1: "pink",
    choice2: "blue",
    choice3: "red",
    choice4: "green",
    choice5: "orange",
    choice6: "purple",
    question_type: "bullshit"
  }).then(function(err,data){
    if (err) return console.log(err)
  })
  db.Question.create({
    text: "favorite food?",
    choice1: "none",
    choice2: "all",
    choice3: "people",
    choice4: "cheese",
    choice5: "meat",
    choice6: "veggies",
    question_type: "bullshit"
  }).then(function(err,data){
    if (err) return console.log(err)
  })
}


app.get("/",function(req,res){
  res.sendFile(__dirname+"/public/Main.html")
});

app.get("/api/questions",function(req,res){
  db.Question.findAll()
  .then(function(data){
    console.log(data);
    res.json(data)
  })
})

app.post("/api/question",function(req,res){
  for (let i = 0; i < req.body.choices.length; i++) {
    db.UserResponse.create({
      QuestionId: req.body.choices[i].id,
      answer: req.body.choices[i].choice
    })
    .then(function(data){
      console.log(data);
      res.end()
    })
  console.log(req.body);
  } 


})


// Routes
// =============================================================
// require("./routes/html-routes.js")(app);
// require("./routes/author-api-routes.js")(app);
// require("./routes/post-api-routes.js")(app);
// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    populatedb();
    console.log("App listening on PORT " + PORT);
  });
});