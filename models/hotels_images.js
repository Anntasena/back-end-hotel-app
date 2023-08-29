'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hotels_images extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  hotels_images.init({
    url: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'hotels_images',
  });
  return hotels_images;
};