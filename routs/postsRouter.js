const express = require("express");
const { rawListeners } = require("../app");
const router = express.Router();

const posts = [
  {
    id: 1,
    topic: "test1",
    text: "text test1",
  },
  {
    id: 2,
    topic: "test2",
    text: "text test2",
  },
  {
    id: 3,
    topic: "test3",
    text: "text test3",
  },
];

router.get("/", (req, res) => {
  res.status(200).json({ posts });
});

router.get("/:id", (req, res) => {
  const [post] = posts.filter((post) => {
    post.id === req.params.id;
  });

  res.status(200).json({ status: "success", code: 200, post });
});

router.post("/", (req, res) => {});

router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

module.exports = router;
