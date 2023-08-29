const express = require("express");
const Router = express.Router();

// Import Controller
const { hotelsControllers } = require("./../controllers"); // Akan otomatis membaca index.js nya

Router.get("/", hotelsControllers.findRooms);

module.exports = Router;
