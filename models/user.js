module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User",{
        user: {
            type: DataTypes.STRING,
            validate: {
                isAlpha: true,
            }
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
    });

    return User;
};