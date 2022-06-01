const crypto = require("crypto");
const express = require("express");
const { runInNewContext } = require("vm");
const router = express.Router();

let posts = [
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
  const index = posts.findIndex((post) => post.id === Number(req.params.id));
  res.status(200).json({ status: "success", code: 200, post: posts[index] });
});

router.post("/", (req, res) => {
  const { topic, text } = req.body;
  posts.push({ id: crypto.randomUUID(), topic, text });
  res.status(200).json({ status: "success", code: 200 });
});

router.put("/:id", (req, res) => {
  const { topic, text } = req.body;
  posts.map((post) => {
    if (post.id === Number(req.params.id)) {
      post.topic = topic;
      post.text = text;
    }
  });
  res.status(200).json({ status: "success", code: 200, posts });
});

router.delete("/:id", (req, res) => {
  posts = posts.filter((post) => post.id !== Number(req.params.id));
  res.status(200).json({ status: "success", code: 200, posts });
});

module.exports = router;
