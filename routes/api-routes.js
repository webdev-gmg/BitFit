// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/saved", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Saved.findAll({}).then(function(dbsaved) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbsaved);
    });
  });

  app.get("/api/users", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.User.findAll({}).then(function(dbuser) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbuser); // returns as json when called on the webpage
    });
  });

  app.post("/api/saveds", function(req, res) {
    console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Saved.create({
      caloriesout: req.body.caloriesout,
      remainingCalories:req.body.remainingCalories,
      datedisp: req.body.datedisp

    }).then(function(dbsaved) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbsaved);
    });
  });

  // POST route for saving a new todo
  app.post("/api/saved", function(req, res) {
    console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Saved.create({
      calories_out: req.body.calories_out,
      remain_calories: req.body.remain_calories,
      datedisplay: req.body.date

    }).then(function(dbsaved) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbsaved);
    });
  });

  app.post("/api/users", function(req, res) {
    console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Expense.create({
      name: req.body.name,
      type: req.body.type

    }).then(function(dbuser) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbuser);
    });
  });

  // DELETE route for deleting todos. We can get the id of the todo we want to delete from
  // req.params.id
  app.delete("/api/todos/:id", function(req, res) {

  });

  // PUT route for updating todos. We can get the updated todo from req.body
  app.put("/api/todos", function(req, res) {

  });
};
