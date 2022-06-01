const crypto = require("crypto");
const express = require("express");
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
  const index = posts.findIndex((post) => {
    return post.id === Number(req.params.id);
  });
  res.status(200).json({ status: "success", code: 200, post: posts[index] });
});

router.post("/", (req, res) => {
  const { topic, text } = req.body;
  posts.push({ id: crypto.randomUUID(), topic, text });
  res.status(200).json({ status: "success", code: 200 });
});

router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

module.exports = router;
