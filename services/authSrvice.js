const { User } = require("../db/userModel.js");
const { notAuthorizeError } = require("../helpers/error.js");

const registration = async () => {
  const { email, password } = req.body;
  const user = new User({ email, password });
  await user.save();
};
const login = async () => {};

module.exports = {
  registration,
  login,
};
