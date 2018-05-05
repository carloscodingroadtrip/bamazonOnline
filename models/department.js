module.exports = function(sequelize, DataTypes) {
    var Todo = sequelize.define("deparmtent", {
      name: DataTypes.STRING,
      over_head_costs: DataTypes.FLOAT
    });
    return Todo;
  };
  