const express = require("express");
// const axios = require("axios")
const PORT = process.env.PORT || 8080;
const apiRequests = require("./apiRequests")
const mysql = require("mysql");
// apiRequests.requestWeather("Atlanta")

let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Sage43236984C!",
    database: "user_profile_db"
  });
  // *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
// var express = require("express");
// Sets up the Express App
// =============================================================
// var app = express();
// var PORT = process.env.PORT || 8080;
// Requiring our models for syncing
var db = require("./models ");
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Static directory
//app.use(express.static("public"));
// Routes
// =============================================================
// require("./routes/html-routes.js")(app);
// require("./routes/author-api-routes.js")(app);
// require("./routes/post-api-routes.js")(app);
// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});