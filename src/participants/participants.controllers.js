const Participants = require("../models/participants.models.js");

const findAllParticipants = async () => {
  const data = await Participants.findAll();
  return data;
};

const findParticipantById = async (id) => {
  const data = await Participants.findOne({
    where: {
      id,
    },
  });
  return data;
};

const createdNewParticipant = async (objData) => {
  const newParticipant = {
    id: objData.id,
    userId: objData.userId,
    conversationId: objData.conversationId,
    isGroup: objData.isGroup,
  };
  const data = await Participants.create(newParticipant);
  return data;
};

const updateParticipant = async (id, objData) => {
  const data = await Participants.update(objData, {
    where: {
      id,
    },
  });
  return data[0];
};

const deleteParticipant = async (id) => {
  const data = await Participants.destroy({
    where: {
      id,
    },
  });
  return data;
};
module.exports = {
  findAllParticipants,
  findParticipantById,
  createdNewParticipant,
  updateParticipant,
  deleteParticipant,
};
