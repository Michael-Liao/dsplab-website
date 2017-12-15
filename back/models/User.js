module.exports = (sequelize, Sequelize) =>
  sequelize.define('User', {
    username: {
      type: Sequelize.STRING,
      unique: true
    },
    email: {
      type: Sequelize.STRING,
      unique: true
    },
    password: Sequelize.STRING
  });
