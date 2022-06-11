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

router.use(modelMiddleware);
router.get("/", getPosts);
router.get("/:id", getPostById);
router.post("/", postValidation, postPost);
router.put("/:id", putValidation, putPost);
router.delete("/:id", deletePost);

module.exports = router;
