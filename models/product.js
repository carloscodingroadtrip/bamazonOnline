module.exports = function(sequelize, DataTypes){
    var Product = sequilize.define(
      "Product",
       {
            productName: {
                type: DataTypes.STRING,
                allowNull: false
            },
           departmentName: {
                type: DataTypes.STRING,
                allowNull: false
           },
           price: {
                type: DataTypes.DECIMAL(10,2),
                defaultValue: 0.00
           },
           stockQuantity: {
                type: DataTypes.INTEGER,
                defaultValue: 0
           },
           productSales: {
                type: DataTypes.DECIMAL(10,2),
                defaultValue: 0
           }
       },
       {}
    );
};