"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class hotels extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ hotels_images, hotels_has_rooms, facility }) {
      // define association here
      this.hasMany(hotels_images, { foreignKey: "hotels_id" });
      this.hasMany(hotels_has_rooms, { foreignKey: "hotels_id" });
      this.belongsToMany(facility, {
        through: "hotels_has_facility",
        foreignKey: "hotels_id",
      });
    }
  }
  hotels.init(
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      description: DataTypes.STRING,
      telephone: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "hotels",
    }
  );
  return hotels;
};
