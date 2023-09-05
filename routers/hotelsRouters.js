const express = require("express");
const Router = express.Router();

// Import All Controller
const { hotelsControllers } = require("../controllers");

Router.get("/", hotelsControllers.search);

module.exports = Router;
