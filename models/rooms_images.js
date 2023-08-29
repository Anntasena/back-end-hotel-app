"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class rooms_images extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ hotels_has_rooms }) {
      // define association here
      this.belongsTo(hotels_has_rooms, { foreignKey: "hotels_has_rooms_id" });
    }
  }
  rooms_images.init(
    {
      url: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "rooms_images",
    }
  );
  return rooms_images;
};
