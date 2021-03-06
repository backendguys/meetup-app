'use strict';
module.exports = (sequelize, DataTypes) => {
  const Roles = sequelize.define('Roles', {
    role_name: DataTypes.STRING,
    permission_id: DataTypes.INTEGER
  }, {});
  Roles.associate = function(models) {
    // associations can be defined here
    // Roles.belongsTo(models.User, {
    //   foreignKey: 'UserID',
    //   as: 'roles',
    //   onDelete: 'CASCADE',
    // });
  };
  return Roles;
};
