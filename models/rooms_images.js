"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class rooms_images extends Model {
    static associate({ hotels_has_rooms }) {
      this.belongsTo(hotels_has_rooms, { foreignKey: "hotels_has_rooms_id" });
    }
  }
  rooms_images.init(
    {
      url: DataTypes.STRING,
      createdAt: {
        type: DataTypes.DATE, 
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: DataTypes.DATE, 
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      }
    },
    {
      sequelize,
      modelName: "rooms_images",
    }
  );
  return rooms_images;
};
