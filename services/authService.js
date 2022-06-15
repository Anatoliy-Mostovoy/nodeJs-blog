const { User } = require("../db/userModel.js");
const bcrypt = require("bcrypt");
const { notAuthorizeError } = require("../helpers/error.js");
const saltRounds = 10;

const registration = async (email, password) => {
  const user = new User({ email, password: bcrypt(password, saltRounds) });
  await user.save();
};
const login = async () => {};

module.exports = {
  registration,
  login,
};
