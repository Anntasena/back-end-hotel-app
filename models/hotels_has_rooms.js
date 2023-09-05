"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class hotels_has_rooms extends Model {
    static associate({
      hotels,
      rooms_images,
      reservations,
      hotels_has_bedtype,
      facility,
    }) {
      this.belongsTo(hotels, { foreignKey: "hotels_id" });
      this.belongsTo(hotels_has_bedtype, { foreignKey: "hotels_has_bedtype_id" });
      this.hasMany(rooms_images, { foreignKey: "hotels_has_rooms_id" });
      this.hasMany(reservations, { foreignKey: "hotels_has_rooms_id" });
      this.belongsToMany(facility, {
        through: "hotels_has_rooms_has_facility",
        foreignKey: "hotels_has_rooms_id",
      });
    }
  }
  hotels_has_rooms.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      total_guest: DataTypes.INTEGER,
      total_rooms: DataTypes.INTEGER,
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
      modelName: "hotels_has_rooms",
    }
  );
  return hotels_has_rooms;
};
