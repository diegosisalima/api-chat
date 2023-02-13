const conversationsControllers = require("./conversations.controllers.js");
const responseHandlers = require("../utils/handleResponses");

const getAllConversations = (req, res) => {
  conversationsControllers
    .findAllConversations()
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

const postNewConversation = (req, res) => {
  const objData = req.body;
  conversationsControllers
    .createdNewConversation(objData)
    .then((data) => {
      responseHandlers.success({
        res,
        data,
        status: 201,
        message: "conversation created successfully",
      });
    })
    .catch((error) => {
      responseHandlers.error({
        res,
        data: error,
        status: 400,
        message: "Error, conversation not created",
      });
    });
};

const getConversationById = (req, res) => {
  const id = Number(req.params.id);
  conversationsControllers
    .findConversationById(id)
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
const patchConversation = (req, res) => {
  const id = req.params.id;
  const objData = req.body;
  conversationsControllers
    .updateConversation(id, objData)
    .then((data) => {
      if (data) {
        responseHandlers.success({
          res,
          status: 200,
          message: "conversation updated successfully",
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
        message: "Error, conversation not updated",
      });
    });
};

const deleteConversation = (req, res) => {
  const id = req.params.id;
  conversationsControllers
    .deleteConversation(id)
    .then((data) => {
      if (data) {
        responseHandlers.success({
          res,
          status: 204,
          message: "conversation deleted successfully",
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
        message: "Error, conversation not deleted",
      });
    });
};
module.exports = {
  getAllConversations,
  postNewConversation,
  getConversationById,
  patchConversation,
  deleteConversation,
};
