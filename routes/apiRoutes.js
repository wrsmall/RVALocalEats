var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/restaurants", function(req, res) {
    db.Restaurant.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Create a new example
  app.post("/api/restaurants", function (req, res) {
    db.Restaurant.create(
      {
        name: req.body.name,
        city: req.body.city,
        state: req.body.state,
        address: req.body.address,
        vegetarian: req.body.vegetarian,
        vegan: req.body.vegan,
        pescatarian: req.body.pescatarian,
        carnivore: req.body.carnivore,
        glutenFree: req.body.glutenFree,
        type: req.body.type,
        price: req.body.price,
        meal: req.body.meal,
        wait: req.body.wait,
        spice: req.body.spice,
      })
      .then(function (results) {
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
