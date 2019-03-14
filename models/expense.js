module.exports = function(sequelize, DataTypes) {
    var Expense = sequelize.define("Expense", {
      category: DataTypes.STRING,
      amount: DataTypes.FLOAT,
      type:DataTypes.STRING,
      enteredby:DataTypes.STRING
    });
    return Expense;
  };