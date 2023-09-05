"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class hotels_images extends Model {
    static associate({ hotels }) {
      this.belongsTo(hotels, { foreignKey: "hotels_id" });
    }
  }
  hotels_images.init(
    {
      url: DataTypes.STRING,
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
    },
    {
      sequelize,
      modelName: "hotels_images",
    }
  );
  return hotels_images;
};
