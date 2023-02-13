const { Sequelize, Model } = require("sequelize");
const config = require("../../config.js");
const db = new Sequelize(config.db.development);
module.exports = db;
