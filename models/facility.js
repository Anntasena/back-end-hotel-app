"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class facility extends Model {
    static associate({ hotels, hotels_has_rooms }) {
      this.belongsToMany(hotels, {
        through: "hotels_has_facility",
        foreignKey: "facilities_id",
      });
      this.belongsToMany(hotels_has_rooms, {
        through: "hotels_has_rooms_has_facility",
        foreignKey: "facilities_id",
      });
    }
  }
  facility.init(
    {
      name: DataTypes.STRING,
      icon: DataTypes.STRING,
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
    },
    {
      sequelize,
      modelName: "facility",
    }
  );
  return facility;
};
