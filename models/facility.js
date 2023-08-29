"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class facility extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ hotels, hotels_has_rooms }) {
      // define association here
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
    },
    {
      sequelize,
      modelName: "facility",
    }
  );
  return facility;
};
