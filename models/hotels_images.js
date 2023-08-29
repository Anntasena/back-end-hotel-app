"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class hotels_images extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ hotels }) {
      // define association here
      this.belongsTo(hotels, { foreignKey: "hotels_id" });
    }
  }
  hotels_images.init(
    {
      url: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "hotels_images",
    }
  );
  return hotels_images;
};
