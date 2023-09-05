"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class reservations extends Model {
    static associate({ hotels_has_rooms }) {
      this.belongsTo(hotels_has_rooms, { foreignKey: "hotels_has_rooms_id" });
    }
  }
  reservations.init(
    {
      amount: DataTypes.INTEGER,
      check_in: DataTypes.DATE,
      check_out: DataTypes.DATE,
      total_room: DataTypes.INTEGER,
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
      modelName: "reservations",
    }
  );
  return reservations;
};
