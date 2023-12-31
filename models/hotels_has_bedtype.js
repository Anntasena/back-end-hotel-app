"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class hotels_has_bedtype extends Model {
    static associate({ hotels_has_rooms }) {
      this.hasMany(hotels_has_rooms, { foreignKey: "rooms_has_bedtype_id" });
    }
  }
  hotels_has_bedtype.init(
    {
      name: DataTypes.STRING,
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
      modelName: "hotels_has_bedtype",
    }
  );
  return hotels_has_bedtype;
};
