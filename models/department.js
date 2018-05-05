module.exports = function(sequelize, DataTypes) {
    var deparmtent = sequelize.define("deparmtent", {
      name: DataTypes.STRING,
      over_head_costs: DataTypes.FLOAT
    });
    return deparmtent;
  };
