const { registration, login } = require("../services/authService.js");

const registrationController = async (req, res) => {
  const { email, password } = req.body;
  await registration(email, password);
  res
    .status(200)
    .json({ status: "success", code: 200, message: "User was registrated" });
};
const loginController = async (req, res) => {};

module.exports = { registrationController, loginController };
