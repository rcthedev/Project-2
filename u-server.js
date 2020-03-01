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
      text: "What is your first date price point?",
      choice1: "$",
      choice2: "$$",
      choice3: "$$$",
      // choice4: "",
      // choice5: "",
      // choice6: "",
      question_type: "Date"
    }).then(function(err,data){
      if (err) return console.log(err)
    })
    db.Question.create({
      text: "What don't you like??",
      choice1: "Dinner & a Movie",
      choice2: "Outdoor Activities",
      choice3: "Concert/Event",
      choice4: "Museums/Arts",
      // choice5: "",
      // choice6: "",
      question_type: "Date"
    }).then(function(err,data){
      if (err) return console.log(err)
    })
    db.Question.create({
      text: "Do you and your date bond over...",
      choice1: "Art/History?",
      choice2: "Music?",
      choice3: "Nutrition and Fitness?",
      choice4: "Foodies?",
      // choice5: "",
      // choice6: "",
      question_type: "Date"
    }).then(function(err,data){
      if (err) return console.log(err)
    })
    db.Question.create({
      text: "Where does your date feel most at home?",
      choice1: "Coffee Shop",
      choice2: "Around OThers",
      choice3: "At Home",
      choice4: "Amusement Park/Park",
      // choice5: "",
      // choice6: "",
      question_type: "Date"
    }).then(function(err,data){
      if (err) return console.log(err)
    })
    db.Question.create({
      text: "What is their ideal date?",
      choice1: "Fancy dinner and night out on the town",
      choice2: "Brunch and laid back conversation",
      choice3: "Amusment Park/Escape",
      choice4: "Outdoor Adventures",
      // choice5: "",
      // choice6: "",
      question_type: "Date"
    }).then(function(err,data){
      if (err) return console.log(err)
    })
    db.Question.create({
      text: "What are you planning on wearing?",
      choice1: "Comfy",
      choice2: "Casual",
      choice3: "Business Formal",
      choice4: "Formal",
      // choice5: "",
      // choice6: "",
      question_type: "Date"
    }).then(function(err,data){
      if (err) return console.log(err)
    })
    db.Question.create({
      text: "What is your date's love language?",
      choice1: "Words of Affirmation",
      choice2: "Acts of Service",
      choice3: "Recieving Gifts",
      choice4: "Quality Time",
      choice5: "Physical Touch",
      // choice6: "",
      question_type: "Date"
    }).then(function(err,data){
      if (err) return console.log(err)
    })
    db.Question.create({
      text: "What is your date's favorite thing to do?",
      choice1: "Playing Video Games",
      choice2: "Talking with Friends",
      choice3: "Working Out",
      choice4: "Reading a Book",
      // choice5: "",
      // choice6: "",
      question_type: "Date"
    }).then(function(err,data){
      if (err) return console.log(err)
    })
    db.Question.create({
      text: "What is your date's favorite food?",
      choice1: "Asian",
      choice2: "Mexican",
      choice3: "Italian",
      choice4: "American",
      choice5: "Vegetarian/Vegan",
      choice6: "Idian",
      question_type: "Date"
    }).then(function(err,data){
      if (err) return console.log(err)
    })
    db.Question.create({
      text: "Do you appreciate over the top gestures?",
      choice1: "Yes",
      choice2: "Occasionally",
      choice3: "No",
      // choice4: "",
      // choice5: "",
      // choice6: "",
      question_type: "User"
    }).then(function(err,data){
      if (err) return console.log(err)
    })
  }

// Routes
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
app.post("/api/questions",function(req,res){
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