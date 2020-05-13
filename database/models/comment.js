'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    postID: DataTypes.INTEGER,
    userID: DataTypes.INTEGER,
    comment_comment: DataTypes.STRING
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
  };
  return Comment;
};