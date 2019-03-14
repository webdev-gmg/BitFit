module.exports = function(sequelize, DataTypes) {
    var Saved = sequelize.define("Saved", {
      caloriesout: DataTypes.FLOAT,
      remainingCalories:DataTypes.FLOAT,
      datedisp:DataTypes.STRING
    });
    return Saved;
  };