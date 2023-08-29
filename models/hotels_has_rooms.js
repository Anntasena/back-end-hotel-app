"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class hotels_has_rooms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      hotels,
      rooms_images,
      reservations,
      rooms_has_bedtype,
      facility,
    }) {
      // define association here
      this.belongsTo(hotels, { foreignKey: "hotels_id" });
      this.hasMany(rooms_images, { foreignKey: "hotels_has_rooms_id" });
      this.hasMany(reservations, { foreignKey: "hotels_has_rooms_id" });
      this.hasMany(rooms_has_bedtype, { foreignKey: "rooms_has_bedtype_id" });
      this.belongsToMany(facility, {
        through: "hotels_has_rooms_has_facility",
        foreignKey: "hotels_has_rooms_id",
      });
    }
  }
  hotels_has_rooms.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.STRING,
      total_guest: DataTypes.INTEGER,
      total_rooms: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "hotels_has_rooms",
    }
  );
  return hotels_has_rooms;
};
