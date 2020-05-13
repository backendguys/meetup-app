'use strict';
module.exports = (sequelize, DataTypes) => {
  const UsersGroup = sequelize.define('UsersGroup', {
    userID: DataTypes.INTEGER,
    groupID: DataTypes.INTEGER
  }, {});
  UsersGroup.associate = function(models) {
    // associations can be defined here
    // UsersGroup.belongsTo(models.User, {foreignKey:'userId'})
    // UsersGroup.belongsTo(models.Groups, {foreignKey:'groupId'})
  };
  return UsersGroup;
};
