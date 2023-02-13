const Messages = require("../models/messages.models.js");

const findAllMessages = async () => {
  const data = await Messages.findAll();
  return data;
};

const findMessageById = async (id) => {
  const data = await Messages.findOne({
    where: {
      id,
    },
  });
  return data;
};

const createdNewMessage = async (objData) => {
  const newMessage = {
    id: objData.id,
    content: objData.content,
    participantId: objData.participantId,
    status: objData.status,
  };
  const data = await Messages.create(newMessage);
  return data;
};

const updateMessage = async (id, objData) => {
  const data = await Messages.update(objData, {
    where: {
      id,
    },
  });
  return data[0];
};

const deleteMessage = async (id) => {
  const data = await Messages.destroy({
    where: {
      id,
    },
  });
  return data;
};
module.exports = {
  findAllMessages,
  findMessageById,
  createdNewMessage,
  updateMessage,
  deleteMessage,
};
