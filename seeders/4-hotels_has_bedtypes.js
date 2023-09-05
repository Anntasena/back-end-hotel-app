"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("hotels_has_bedtypes", [
      {
        name: "Standard",
      },
      {
        name: "Premium Twin Bed",
      },
      {
        name: "Premium King Bed",
      },
      {
        name: "Premium King Bed Club",
      },
      {
        name: "Deluxe",
      },
      {
        name: "Deluxe King",
      },
      {
        name: "Deluxe Twin",
      },
      {
        name: "Deluxe Queen",
      },
      {
        name: "Grand Deluxe",
      },
      {
        name: "Grand Deluxe King",
      },
      {
        name: "Grand Deluxe Twin",
      },
      {
        name: "Executive Grand Deluxe",
      },
      {
        name: "Executive Grand Deluxe King",
      },
      {
        name: "Executive Grand Deluxe Twin",
      },
      {
        name: "Salon Suite King",
      },
      {
        name: "King Bed",
      },
      {
        name: "Twin Bed",
      },
      {
        name: "Club Room Twin Bed",
      },
      {
        name: "Club Room King Bed",
      },
      {
        name: "Club Suite King Bed",
      },
      {
        name: "Club Suite Bedroom",
      },
      {
        name: "Executive",
      },
      {
        name: "Executive King",
      },
      {
        name: "Executive Twin",
      },
      {
        name: "Executive King Club",
      },
      {
        name: "Executive Twin Club",
      },
      {
        name: "Executive Suite",
      },
      {
        name: "Suite",
      },
      {
        name: "Suite Club",
      },
      {
        name: "Premiere",
      },
      {
        name: "Premiere King",
      },
      {
        name: "Premiere Twin",
      },
      {
        name: "Premiere Club",
      },
      {
        name: "Premiere Suite",
      },
      {
        name: "Junior Suite",
      },
      {
        name: "Business Suite",
      },
      {
        name: "Family Suite",
      },
      {
        name: "Governor Suite",
      },
      {
        name: "Celebrity Suite",
      },
      {
        name: "Superior Twin",
      },
      {
        name: "Superior King",
      },
      {
        name: "Superior Premiere",
      },
      {
        name: "Bubba Suite",
      },
      {
        name: "Tjokro Suite",
      },
      {
        name: "Solitaire Signature Suite",
      },
      {
        name: "Chairman Suite",
      },
      {
        name: "Sunrise Suite",
      },
      {
        name: "Sunset Suite",
      },
      {
        name: "Grand Deluxe Lagoon King",
      },
      {
        name: "Grand Deluxe Lagoon Twin",
      },
      {
        name: "Cliff Junior Suite",
      },
      {
        name: "Sunrise Studio",
      },
      {
        name: "Bamboo Studio",
      },
      {
        name: "Desa Studio",
      },
      {
        name: "Island Suite",
      },
      {
        name: "Studio",
      },
      {
        name: "Rooftop Suites",
      },
      {
        name: "Family Premiere",
      },
      {
        name: "The Anvanya Suite",
      },
      {
        name: "The Anvanya Residence",
      },
      {
        name: "The Anvanya Villa",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
