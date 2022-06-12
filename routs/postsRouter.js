const crypto = require("crypto");
const express = require("express");
const router = express.Router();

const {
  postValidation,
  putValidation,
} = require("../middleware/validation.js");

const {
  getPostsController,
  getPostByIdController,
  addPostController,
  putPostController,
  deletePostController,
} = require("../controllers/postsControllers.js");

const { asyncWrapper } = require("../helpers/apiHelpers.js");

router.get("/", asyncWrapper(getPostsController));
router.get("/:id", asyncWrapper(getPostByIdController));
router.post("/", postValidation, asyncWrapper(addPostController));
router.put("/:id", putValidation, asyncWrapper(putPostController));
router.delete("/:id", asyncWrapper(deletePostController));

module.exports = router;
