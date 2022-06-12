const { Posts } = require("../db/postModel.js");

const getPosts = async () => {
  const posts = await Posts.find();
  return posts;
};
const getPostById = async (id) => {
  const post = await Posts.findById(id);
  return post;
};
const addPost = async ({ topic, text }) => {
  const post = new Posts({ topic, text });
  await post.save();
};
const updatePostById = async (id, { topic, text }) => {
  const post = await Posts.findByIdAndUpdate(id, { $set: { topic, text } });
  return post;
};
const deletePostById = async (id) => {
  await Posts.findByIdAndDelete(id);
};

module.exports = {
  getPosts,
  getPostById,
  addPost,
  updatePostById,
  deletePostById,
};
