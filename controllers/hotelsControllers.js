const db = require("./../models");
const { sequelize } = require("./../models");

module.exports = {
  search: async (req, res) => {
    try {
      const { city, total_guest, check_in, check_out } = req.query;

      const findHotels = await db.hotels.findAll({
        attributes: ["name", "locations_id"],
        include: [
          {
            model: db.hotels_images,
            attributes: ["url"],
          },
          {
            model: db.hotels_has_rooms,
            attributes: [
              [sequelize.fn("MIN", sequelize.col("price")), "minPrice"],
            ],
          },
          {
            model: db.location,
            attributes: ["city"],
          },
        ],
        where: { locations_id: city },
        group: ["hotels.id"],
      });

      res.status(200).send({
        isError: false,
        message: "Hotel Search Success",
        data: "findHotels",
      });
    } catch (error) {
      console.log(error);
    }
  },
};
