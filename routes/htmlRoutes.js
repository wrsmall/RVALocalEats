var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Restaurant.findAll({}).then(function(dbRestaurant) {
      res.render("index", {
        msg: "Welcome!",
        Restaurant: dbRestaurant
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/restaurant/:id", function(req, res) {
    db.Restaurant.findOne({ where: { id: req.params.id } }).then(function(dbRestaurant) {
      res.render("restaurant", {
        Restaurant: dbRestaurant
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
