'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    event_name: DataTypes.STRING,
    userID: DataTypes.INTEGER,
    event_location: DataTypes.STRING,
    event_price: DataTypes.INTEGER
  }, {});
  Event.associate = function(models) {
    // associations can be defined here
  };
  return Event;
};