module.exports = function(sequelize, DataTypes) {
  
 // var Example = sequelize.define("Example", {
    //text: DataTypes.STRING,
    //description: DataTypes.TEXT
  //});
  //return Example;

  var Restaurant = sequelize.define("Restaurants", {
    name: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    address: DataTypes.String,
    vegetarian: DataTypes.INTEGER,
    vegan: DataTypes.INTEGER,
    pescatarian: DataTypes.INTEGER,
    carnivore: DataTypes.INTEGER,
    glutenFree: DataTypes.INTEGER,
    type: DataTypes.STRING,
    price: DataTypes.STRING,
    meal: DataTypes.STRING,
    wait: DataTypes.STRING,
    bar: DataTypes.STRING,
    spice: DataTypes.INTEGER
  });
  return Restaurant;

};
