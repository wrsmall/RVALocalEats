var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/restaurants/:vegetarian/:vegan/:carnivore/:pescatarian/:glutenFree/:spice/:wait/:type/:price/", function (req, res) {
    db.Restaurant.findAll({

      attributes:
        ['name',
          'vegetarian',
          'vegan',
          'pescatarian',
          'carnivore',
          'glutenFree',
          'type',
          'price',
          'wait',
          'spice']
    }).then(function (results) {
      //console.log(results);

      var db = results;
      var userPref = req.params;
      //console.log(userPref);
      var bestMatch = 0;
      var total = 0;
      var minDiff = 500;
      console.log("this is the vegan data");
      //console.log(db[0].dataValues.vegan);
      console.log("this is the vegan user score");
      //console.log(parseInt(userPref.vegan));
      for (let i = 0; i < db.length; i++) {
        total += (db[i].dataValues.vegetarian - parseInt(userPref.vegetarian));
        total += (db[i].dataValues.vegan - parseInt(userPref.vegan));
        total += (db[i].dataValues.carnivore - parseInt(userPref.carnivore));
        total += (db[i].dataValues.pescatarian - parseInt(userPref.pescatarian));
        total += (db[i].dataValues.glutenFree - parseInt(userPref.glutenFree));
        total += (db[i].dataValues.spice - parseInt(userPref.spice));
        total += (db[i].dataValues.price - parseInt(userPref.price));
        total += (db[i].dataValues.wait - parseInt(userPref.wait));
        total += (db[i].dataValues.type - parseInt(userPref.type));
        //console.log(total);


        if (total < minDiff) {
          bestMatch = i;
          minDiff = total;
        }
      }
      //console.log(db[bestMatch]);
      //res.json(db[bestMatch]);
      



      //res.json(bestMAtch.length);
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
  app.delete("/api/restaurants/:id", function (req, res) {
    db.Restaurant.destroy({ where: { id: req.params.id } }).then(function (results) {
      res.json(results);
    });
  });
};


