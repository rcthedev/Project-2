// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require("bcryptjs");
// Creating our User Quiz
module.exports = function(sequelize, DataTypes) {
  var Question = sequelize.define("Question", {
    // The Quiz Questions will populate
    text: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // The Quiz Options cannot be null
    choice1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    choice2: {
        type: DataTypes.STRING,
        allowNull: true,
    },
      choice3: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      choice4: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      choice5: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      choice6: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      question_type: {
        type: DataTypes.STRING,
        allowNull: true,
      }
  });
  Question.associate = function(models) {
    // Associating User with Posts
    // When an Author is deleted, also delete any associated Posts
    Question.hasMany(models.UserResponse, {
      onDelete: "cascade"
    });
  };
  return Question;
};