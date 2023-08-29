const db = require("./../models");

module.exports = {
  findRooms: async (req, res) => {
    try {
      const findRooms = await db.hotels.findAll();
      console.log(findRooms);
    } catch (error) {
      console.log(error);
    }
  },
};
