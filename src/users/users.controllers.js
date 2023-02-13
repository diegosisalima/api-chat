const Users = require("../models/users.models.js");

const findAllUsers = async () => {
  const data = await Users.findAll();
  return data;
};

const findUserById = async (id) => {
  const data = await Users.findOne({
    where: {
      id,
    },
  });
  return data;
};

const createdNewUser = async (objData) => {
  const newUser = {
    id: objData.id,
    firstName: objData.firstName,
    lastName: objData.lastName,
    email: objData.email,
    password: objData.password,
    profileImage: objData.profileImage,
    isActive: objData.isActive,
    phone: objData.phone,
  };
  const data = await Users.create(newUser);
  return data;
};

const updateUser = async (id, objData) => {
  const data = await Users.update(objData, {
    where: {
      id,
    },
  });
  return data[0];
};

const deleteUser = async (id) => {
  const data = await Users.destroy({
    where: {
      id,
    },
  });
  return data;
};
module.exports = {
  findAllUsers,
  findUserById,
  createdNewUser,
  updateUser,
  deleteUser,
};
