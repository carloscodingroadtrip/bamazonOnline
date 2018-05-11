module.exports = function (sequelize, DataTypes) {
    var Product = sequelize.define(
        "Product", {
            productName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            departmentName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            price: {
                type: DataTypes.DECIMAL(10, 2),
                defaultValue: 0.00
            },
            stockQuantity: {
                type: DataTypes.INTEGER,
                defaultValue: 0
            },
            productSales: {
                type: DataTypes.DECIMAL(10, 2),
                defaultValue: 0
            }
        }, {}
    );

    // Product.associate = (models) => {
    //     // We're saying that a Post should belong to an Author
    //     // A Post can't be created without an Author due to the foreign key constraint
    //     Product.belongsTo(department.name, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };

    return Product;
};