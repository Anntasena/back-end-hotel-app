"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class reservations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ hotels_has_rooms }) {
      // define association here
      this.belongsTo(hotels_has_rooms, { foreignKey: "hotels_has_rooms_id" });
    }
  }
  reservations.init(
    {
      ammount: DataTypes.INTEGER,
      check_in: DataTypes.DATE,
      check_out: DataTypes.DATE,
      total_room: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "reservations",
    }
  );
  return reservations;
};
