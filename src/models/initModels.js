const Users = require("./users.models");
const Conversations = require("./conversations.models.js");
const Participants = require("./participants.models.js");
const Messages = require("./messages.models.js");

const initModels = () => {
  Participants.belongsTo(Users);
  Users.hasMany(Participants);

  Messages.belongsTo(Participants);
  Participants.hasMany(Messages);

  Participants.belongsTo(Conversations);
  Conversations.hasMany(Participants);
};
module.exports = initModels;
