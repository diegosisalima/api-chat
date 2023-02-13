const db = require("../utils/database.js");
const { DataTypes } = require("sequelize");
const Users = require("./users.models.js");
const Conversations = require("./conversations.models.js");

const Participants = db.define("participants", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: Users,
      key: "id",
    },
  },
  conversationId: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: Conversations,
      Key: "id",
    },
  },
  isGroup: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Participants;
