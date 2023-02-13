const participantsControllers = require("./participants.controllers.js");
const responseHandlers = require("../utils/handleResponses");

const getAllParticipants = (req, res) => {
  participantsControllers
    .findAllParticipants()
    .then((data) => {
      responseHandlers.success({
        res,
        data,
        status: 200,
        message: "request successfully",
      });
    })
    .catch((error) => {
      responseHandlers.error({
        res,
        data: error,
        status: 400,
        message: "Error request",
      });
    });
};

const postNewParticipant = (req, res) => {
  const objData = req.body;
  participantsControllers
    .createdNewParticipant(objData)
    .then((data) => {
      responseHandlers.success({
        res,
        data,
        status: 201,
        message: "participant created successfully",
      });
    })
    .catch((error) => {
      responseHandlers.error({
        res,
        data: error,
        status: 400,
        message: "Error, participant not created",
      });
    });
};

const getParticipantById = (req, res) => {
  const id = Number(req.params.id);
  participantsControllers
    .findParticipantById(id)
    .then((data) => {
      if (data) {
        responseHandlers.success({
          res,
          data,
          status: 201,
          data,
        });
      } else {
        responseHandlers.success({
          res,
          data,
          status: 404,
          message: "not found",
        });
      }
    })
    .catch((error) => {
      responseHandlers.error({
        res,
        data: error,
        status: 400,
        message: "Error, not found",
      });
    });
};
const patchParticipant = (req, res) => {
  const id = req.params.id;
  const objData = req.body;
  participantsControllers
    .updateParticipant(id, objData)
    .then((data) => {
      if (data) {
        responseHandlers.success({
          res,
          status: 200,
          message: "participant updated successfully",
          data,
        });
      } else {
        responseHandlers.success({
          res,
          status: 404,
          message: "not found",
          data,
        });
      }
    })
    .catch((error) => {
      responseHandlers.error({
        res,
        data: error,
        status: 400,
        message: "Error, participant not updated",
      });
    });
};

const deleteParticipant = (req, res) => {
  const id = req.params.id;
  participantsControllers
    .deleteParticipant(id)
    .then((data) => {
      if (data) {
        responseHandlers.success({
          res,
          status: 204,
          message: "participant deleted successfully",
          data,
        });
      } else {
        responseHandlers.success({
          res,
          status: 404,
          message: "not found",
          data,
        });
      }
    })
    .catch((error) => {
      responseHandlers.error({
        res,
        data: error,
        status: 400,
        message: "Error, participant not deleted",
      });
    });
};
module.exports = {
  getAllParticipants,
  postNewParticipant,
  getParticipantById,
  patchParticipant,
  deleteParticipant,
};
