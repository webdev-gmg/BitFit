module.exports = function(sequelize, DataTypes) {
    var ClientInfo = sequelize.define("ClientInfo", {
      clientid: DataTypes.STRING,
      grant_type:DataTypes.STRING
    });
    return ClientInfo;
  };