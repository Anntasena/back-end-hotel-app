'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hotels_has_rooms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  hotels_has_rooms.init({
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    total_guest: DataTypes.INTEGER,
    total_rooms: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'hotels_has_rooms',
  });
  return hotels_has_rooms;
};