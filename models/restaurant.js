module.exports = function(sequelize, DataTypes) {
  
 // var Example = sequelize.define("Example", {
    //text: DataTypes.STRING,
    //description: DataTypes.TEXT
  //});
  //return Example;

  var Restaurant = sequelize.define("Restaurant", {
    name: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    address: DataTypes.STRING,
    vegetarian: DataTypes.INTEGER,
    vegan: DataTypes.INTEGER,
    pescatarian: DataTypes.INTEGER,
    carnivore: DataTypes.INTEGER,
    glutenFree: DataTypes.INTEGER,
    type: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    wait: DataTypes.INTEGER,
    spice: DataTypes.INTEGER
  });
  return Restaurant;

};
