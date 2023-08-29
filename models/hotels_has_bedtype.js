"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class hotels_has_bedtype extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ hotels_has_rooms }) {
      // define association here
      this.belongsTo(hotels_has_rooms, { foreignKey: "rooms_has_bedtype_id" });
    }
  }
  hotels_has_bedtype.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "hotels_has_bedtype",
    }
  );
  return hotels_has_bedtype;
};
