const crypto = require("crypto");
const express = require("express");
const router = express.Router();

const {
  postValidation,
  putValidation,
} = require("../middleware/validation.js");

const modelMiddleware = require("../middleware/models.js");

const {
  getPosts,
  getPostById,
  postPost,
  putPost,
  deletePost,
} = require("../controllers/postsControllers.js");

const { asyncWrapper } = require("../helpers/apiHelpers.js");

router.use(modelMiddleware);
router.get("/", asyncWrapper(getPosts));
router.get("/:id", asyncWrapper(getPostById));
router.post("/", postValidation, asyncWrapper(postPost));
router.put("/:id", putValidation, asyncWrapper(putPost));
router.delete("/:id", asyncWrapper(deletePost));

module.exports = router;
