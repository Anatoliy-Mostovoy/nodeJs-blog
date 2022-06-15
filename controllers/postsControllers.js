const {
  getPosts,
  getPostById,
  addPost,
  updatePostById,
  deletePostById,
} = require("../services/postsService.js");
const { WrongParametersError } = require("../helpers/error");

const getPostsController = async (req, res) => {
  const posts = await getPosts();
  res.status(200).json({ posts });
};

const getPostByIdController = async (req, res) => {
  const { id } = req.params;
  const post = await getPostById(id);
  if (!post) {
    throw new WrongParametersError(`Posts with ID: ${id} not found`);
  }
  res.status(200).json({ status: "success", code: 200, post });
};

const addPostController = async (req, res) => {
  const { topic, text } = req.body;
  await addPost({ topic, text });
  res
    .status(200)
    .json({ status: "success", code: 200, message: "New post was saved" });
};

const putPostController = async (req, res) => {
  const { topic, text } = req.body;
  const { id } = req.params;
  const post = await updatePostById(id, { topic, text });
  if (!post) {
    throw new WrongParametersError(`Post with ID${id} not found`);
  }
  res.status(200).json({ status: "Success", code: 200, post });
};

const deletePostController = async (req, res) => {
  const { id } = req.params;
  const post = await getPostById(id);
  if (!post) {
    throw new WrongParametersError(`Post with ID${id} not found`);
  }
  await deletePostById(id);
  res.status(200).json({
    status: "Success",
    code: 200,
    message: `POST with ID${id} was deleted`,
  });
};

module.exports = {
  getPostsController,
  getPostByIdController,
  addPostController,
  putPostController,
  deletePostController,
};

//TODO native mongoDB
// const ObjectId = require("mongodb").ObjectId;

// const getPosts = async (req, res) => {
//   const posts = await req.db1.Posts.find().toArray();
//   res.status(200).json({ posts });
// };

// const getPostById = async (req, res) => {
//   const { id } = req.params;
//   const post = await req.db.Posts.findOne({ _id: new ObjectId(id) });
//   if (!post) {
//     return res.status(400).json({
//       status: "filled",
//       code: 400,
//       message: `Posts with ID: ${id} not found`,
//     });
//   }
//   res.status(200).json({ status: "success", code: 200, post });
// };

// const postPost = async (req, res) => {
//   const { topic, text } = req.body;
//   await req.db.Posts.insertOne({ topic, text });
//   await req.db.Posts.find().toArray();
//   res
//     .status(200)
//     .json({ status: "success", code: 200, message: "New post was saved" });
// };

// const putPost = async (req, res) => {
//   const { topic, text } = req.body;
//   const { id } = req.params;
//   const post = await req.db.Posts.updateOne(
//     { _id: new ObjectId(id) },
//     { $set: { topic, text } }
//   );
//   if (!post) {
//     res.status(400).json({
//       status: "Filled",
//       code: 400,
//       message: `Post with ID${id} not found`,
//     });
//   }
//   res.status(200).json({ status: "Success", code: 200, post });
// };

// const deletePost = async (req, res) => {
//   const { id } = req.params;
//   const post = await req.db.Posts.findOne({ _id: new ObjectId(id) });
//   if (!post) {
//     return res.status(400).json({
//       status: "Filled",
//       code: 400,
//       message: `Post with ID${id} not found`,
//     });
//   }
//   await req.db.Posts.deleteOne({ _id: new ObjectId(id) });
//   res.status(200).json({
//     status: "Success",
//     code: 200,
//     message: `POST with ID${id} was deleted`,
//   });
// };

// module.exports = { getPosts, getPostById, postPost, putPost, deletePost };
