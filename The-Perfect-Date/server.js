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
    text: "Where do you feel most comfortable?",
    choice1: "Indoors",
    choice2: "Night Out",
    choice3: "Outdoors",
    question_type: "User"
  }).then(function(err,data){
    if (err) return console.log(err)
  })
  db.Question.create({
    text: "What is your favorite type of food?",
    choice1: "Asian",
    choice2: "Mexican",
    choice3: "Italian",
    choice4: "American",
    choice5: "Vegetarian/Vegan",
    choice6: "Indian",
    question_type: "User"
  }).then(function(err,data){
    if (err) return console.log(err)
  })
  db.Question.create({
    text: "How do you spend your free time?",
    choice1: "Indoors",
    choice2: "Night Out",
    choice3: "Outdoors",
    choice4: "Day Trip",
    question_type: "User"
  }).then(function(err,data){
    if (err) return console.log(err)
  })
  db.Question.create({
    text: "How would you describe yourself?",
    choice1: "Introvert",
    choice2: "Extrovert",
    choice3: "Free Spirit",
    choice4: "Reserved",
    question_type: "User"
  }).then(function(err,data){
    if (err) return console.log(err)
  })
  db.Question.create({
    text: "Time of Day?",
    choice1: "Mornings",
    choice2: "Evenings",
    choice3: "MidDay",
    question_type: "User"
  }).then(function(err,data){
    if (err) return console.log(err)
  })
  db.Question.create({
    text: "Are you more of a take charge or go with the flow tyoe of person?",
    choice1: "Take Charge",
    choice2: "Go with the Flow",
    question_type: "User"
  }).then(function(err,data){
    if (err) return console.log(err)
  })
  db.Question.create({
    text: "What is your love language?",
    choice1: "Words of Affirmation",
    choice2: "Acts of Service",
    choice3: "Recieving Gifts",
    choice4: "Quality Time",
    choice5: "Physical Touch",
    question_type: "Date"
  }).then(function(err,data){
    if (err) return console.log(err)
  })
  db.Question.create({
    text: "Before going on a date, I;m most likely doing?",
    choice1: "Playing Video Games",
    choice2: "Talking with Friends",
    choice3: "Working Out",
    choice4: "Reading a Book",
    question_type: "User"
  }).then(function(err,data){
    if (err) return console.log(err)
  })
}


app.get("/",function(req,res){
  res.sendFile(__dirname+"/public/Main.html")
});

app.get("/api/uquestions",function(req,res){
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