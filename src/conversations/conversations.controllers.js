const Conversations = require("../models/conversations.models.js");

const findAllConversations = async () => {
  const data = await Conversations.findAll();
  return data;
};

const findConversationById = async (id) => {
  const data = await Conversations.findOne({
    where: {
      id,
    },
  });
  return data;
};

const createdNewConversation = async (objData) => {
  const newConversation = {
    id: objData.id,
    profileImage: objData.profileImage,
    name: objData.name,
    createdBy: objData.createdBy,
    isGroup: objData.isGroup,
  };
  const data = await Conversations.create(newConversation);
  return data;
};

const updateConversation = async (id, objData) => {
  const data = await Conversations.update(objData, {
    where: {
      id,
    },
  });
  return data[0];
};

const deleteConversation = async (id) => {
  const data = await Conversations.destroy({
    where: {
      id,
    },
  });
  return data;
};
module.exports = {
  findAllConversations,
  findConversationById,
  createdNewConversation,
  updateConversation,
  deleteConversation,
};
