var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/restaurants", function(req, res) {
    db.Restaurant.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Create a new example
  app.post("/api/restaurants", function(req, res) {
    db.Restaurant.create(req.body).then(function(results) {
      res.json(results);
    });
  });

  // Delete an example by id
  app.delete("/api/restaurants/:id", function(req, res) {
    db.Restaurant.destroy({ where: { id: req.params.id } }).then(function(results) {
      res.json(results);
    });
  });
};
