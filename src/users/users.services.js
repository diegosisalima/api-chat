const usersControllers = require("./users.controllers.js");
const responseHandlers = require("../utils/handleResponses");

const getAllUsers = (req, res) => {
  usersControllers
    .findAllUsers()
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

const postNewUser = (req, res) => {
  const objData = req.body;
  usersControllers
    .createdNewUser(objData)
    .then((data) => {
      responseHandlers.success({
        res,
        data,
        status: 201,
        message: "user created successfully",
      });
    })
    .catch((error) => {
      responseHandlers.error({
        res,
        data: error,
        status: 400,
        message: "Error, user not created",
      });
    });
};

const getUserById = (req, res) => {
  const id = Number(req.params.id);
  usersControllers
    .findUserById(id)
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
const patchUser = (req, res) => {
  const id = req.params.id;
  const objData = req.body;
  usersControllers
    .updateUser(id, objData)
    .then((data) => {
      if (data) {
        responseHandlers.success({
          res,
          status: 200,
          message: "user updated successfully",
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
        message: "Error, user not updated",
      });
    });
};

const deleteUser = (req, res) => {
  const id = req.params.id;
  usersControllers
    .deleteUser(id)
    .then((data) => {
      if (data) {
        responseHandlers.success({
          res,
          status: 204,
          message: "user deleted successfully",
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
        message: "Error, user not deleted",
      });
    });
};
module.exports = {
  getAllUsers,
  postNewUser,
  getUserById,
  patchUser,
  deleteUser,
};
