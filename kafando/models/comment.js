'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here 1-n
      Comment.belongsTo(models.Article)
    }
  };
  Comment.init({
    content: DataTypes.TEXT
  }, {
    sequelize: sequelize,
    modelName: 'Comment',
  });
  return Comment;
};