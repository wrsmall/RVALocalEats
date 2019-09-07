var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/restaurants/:vegetarian/:vegan/:carnivore/:pescatarian/:glutenFree/:spice/:wait/:type/:price/", function (req, res) {
    db.Restaurant.findAll({

      attributes:
        ['name',
        'address',
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
      console.log(userPref);
      //console.log(userPref);
      var bestMatch;
      var total = 0;
      var allTotal=[];
      console.log("this is the vegan data");
      //console.log(db[0].dataValues.vegan);
      console.log("this is the vegan user score");
      //console.log(parseInt(userPref.vegan));
      for (let i = 0; i < db.length; i++) {
        total += Math.abs((db[i].dataValues.vegetarian - parseInt(userPref.vegetarian)));
        total += Math.abs((db[i].dataValues.vegan - parseInt(userPref.vegan)));
        total += Math.abs((db[i].dataValues.carnivore - parseInt(userPref.carnivore)));
        total += Math.abs((db[i].dataValues.pescatarian - parseInt(userPref.pescatarian)));
        total += Math.abs((db[i].dataValues.glutenFree - parseInt(userPref.glutenFree)));
        total += Math.abs((db[i].dataValues.spice - parseInt(userPref.spice)));
        total += Math.abs((db[i].dataValues.price - parseInt(userPref.price)));
        total += Math.abs((db[i].dataValues.wait - parseInt(userPref.wait)));
        total += (Math.abs(db[i].dataValues.type - parseInt(userPref.type)));
        //console.log(total);
       db[i].val=parseInt(total);
       allTotal.push(parseInt(total));
       total=0;
       console.log(`all totals: ${allTotal}`);
      }

      var best=Math.min(...allTotal);
      console.log(best);
      console.log(db);
      var multi=[];
      for (let j=0;j<db.length;j++){
        if (best===db[j].val){
        var resMatch=(db[j].dataValues.name);
        var resAddress=(db[j].dataValues.address);
        }
      }
      console.log(`These values are ${multi}`);
      //console.log(db[bestMatch]);
      //res.json(db[bestMatch]);
      



      res.json({resMatch: resMatch, resAddress: resAddress});
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


