const express = require("express");
const router = express.Router();

const { asyncWrapper } = require("../helpers/apiHelpers.js");
const {
  registrationController,
  loginController,
} = require("../controllers/authController.js");

router.post("/registration", asyncWrapper(registrationController));
router.post("/login", asyncWrapper(loginController));

module.exports = router;
