import { userDetails } from "../model/user-model.js";
async function insertUserService(userName, password) {
  try {
    return await userDetails.create({ userName, password });
  } catch (err) {
    return { msg: err.errors.map((val) => val.message).join() };
  }
}
async function getUserByName(userName) {
  try {
    return await userDetails.findOne({
      where: {
        userName,
      },
    });
  } catch (err) {
    return { msg: err.errors.map((val) => val.message).join() };
  }
}

async function getUserService() {
  return await userDetails.findAll();
}

export default {
  insertUserService,
  getUserService,
  getUserByName,
};
