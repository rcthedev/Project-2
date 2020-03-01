// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require("bcryptjs");
// Creating our User Quiz
module.exports = function(sequelize, DataTypes) {
  var UserResponse = sequelize.define("UserResponse", {
    // The Quiz Options cannot be null
    answer: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
  UserResponse.associate = function(models) {
    // Associating User with Posts
    // When an Author is deleted, also delete any associated Posts
    UserResponse.belongsTo(models.Question, {
        foreignKey: {
            allowNull: false
          }
    });
}
    UserResponse.associate = function(models) {
        // Associating User with Posts
        // When an Author is deleted, also delete any associated Posts
        UserResponse.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
              }
        });
}
  return UserResponse;
};