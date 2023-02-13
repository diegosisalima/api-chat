const messagesControllers = require("./messages.controllers.js");
const responseHandlers = require("../utils/handleResponses");

const getAllMessages = (req, res) => {
  messagesControllers
    .findAllMessages()
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

const postNewMessage = (req, res) => {
  const objData = req.body;
  messagesControllers
    .createdNewMessage(objData)
    .then((data) => {
      responseHandlers.success({
        res,
        data,
        status: 201,
        message: "message created successfully",
      });
    })
    .catch((error) => {
      responseHandlers.error({
        res,
        data: error,
        status: 400,
        message: "Error, message not created",
      });
    });
};

const getMessageById = (req, res) => {
  const id = Number(req.params.id);
  messagesControllers
    .findMessageById(id)
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
const patchMessage = (req, res) => {
  const id = req.params.id;
  const objData = req.body;
  messagesControllers
    .updateMessage(id, objData)
    .then((data) => {
      if (data) {
        responseHandlers.success({
          res,
          status: 200,
          message: "message updated successfully",
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
        message: "Error, message not updated",
      });
    });
};

const deleteMessage = (req, res) => {
  const id = req.params.id;
  messagesControllers
    .deleteMessage(id)
    .then((data) => {
      if (data) {
        responseHandlers.success({
          res,
          status: 204,
          message: "message deleted successfully",
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
        message: "Error, message not deleted",
      });
    });
};
module.exports = {
  getAllMessages,
  postNewMessage,
  getMessageById,
  patchMessage,
  deleteMessage,
};
