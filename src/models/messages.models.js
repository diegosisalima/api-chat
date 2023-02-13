const db = require("../utils/database.js");
const { DataTypes } = require("sequelize");
const Participants = require("./participants.models.js");

const Messages = db.define("messages", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  participantId: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: Participants,
      key: "id",
    },
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: "Sent",
  },
});

module.exports = Messages;
