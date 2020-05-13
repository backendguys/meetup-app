'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define('Ticket', {
    ticket_price: DataTypes.STRING,
    eventID: DataTypes.INTEGER,
    ticket_unit: DataTypes.INTEGER,
    ticket_type: DataTypes.STRING,
    userID: DataTypes.INTEGER
  }, {});
  Ticket.associate = function(models) {
    // associations can be defined here
  };
  return Ticket;
};