'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    user_phone_no: DataTypes.STRING,
    role_id: DataTypes.INTEGER,
    dob: DataTypes.STRING,
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  //   User.belongsToMany(models.Groups, {
  //     through:'UsersGroup',
  //     foreignKey: 'userId',
  //     as: 'usergroups',
  //     onDelete: 'CASCADE',
  //   });
  //   User.hasMany(models.Roles, {
  //    foreignKey: 'userId',
  //    as: 'permission',
  //    onDelete: 'CASCADE',
  //  });
  };
  return User;
};
