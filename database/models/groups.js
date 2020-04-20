'use strict';
module.exports = (sequelize, DataTypes) => {
  const Groups = sequelize.define('Groups', {
    group_name: DataTypes.STRING,
    group_track: DataTypes.STRING
  }, {});
  Groups.associate = function(models) {
    // associations can be defined here
    Groups.belongsToMany(models.User, {
      through:'UsersGroup',
      foreignKey: 'groupId',
      as: 'roles',
      onDelete: 'CASCADE',
    });
  };
  return Groups;
};
