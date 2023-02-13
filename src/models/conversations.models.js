const db = require("../utils/database.js");
const { DataTypes } = require("sequelize");

const Conversations = db.define("conversations", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  profileImage: {
    type: DataTypes.STRING,
  },
  name: {
    type: DataTypes.STRING,
  },
  createdBy: {
    type: DataTypes.STRING,
  },
  isGroup: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Conversations;
