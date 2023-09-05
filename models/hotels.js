"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class hotels extends Model {
    static associate({ hotels_images, hotels_has_rooms, facility, location }) {
      this.hasMany(hotels_images, { foreignKey: "hotels_id" });
      this.hasMany(hotels_has_rooms, { foreignKey: "hotels_id" });
      this.belongsTo(location, { foreignKey: "locations_id" });
      this.belongsToMany(facility, {
        through: "hotels_has_facility",
        foreignKey: "hotels_id",
      });
    }
  }
  hotels.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Data Cannot be Empty!" },
        },
      },
      address: DataTypes.STRING,
      description: DataTypes.STRING,
      telephone: DataTypes.STRING,
      email: DataTypes.STRING,
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
      modelName: "hotels",
    }
  );
  return hotels;
};
