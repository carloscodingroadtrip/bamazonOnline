module.exports = function(sequelize, DataTypes) {
    var Department = sequelize.define("department", {
      name: DataTypes.STRING,
      over_head_costs: DataTypes.FLOAT
    });
    return Department;
  };
