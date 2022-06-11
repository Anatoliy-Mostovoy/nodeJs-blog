const getPosts = async (req, res) => {
  const posts = await req.db.Posts.find().toArray();
  res.status(200).json({ posts });
};

const getPostById = (req, res) => {
  // const index = posts.findIndex((post) => post.id === Number(req.params.id));
  // res.status(200).json({ status: "success", code: 200, post: posts[index] });
};

const postPost = (req, res) => {
  // const { topic, text } = req.body;
  // posts.push({ id: crypto.randomUUID(), topic, text });
  // res.status(200).json({ status: "success", code: 200 });
};

const putPost = (req, res) => {
  // const { topic, text } = req.body;
  // posts.map((post) => {
  //   if (post.id === Number(req.params.id)) {
  //     post.topic = topic;
  //     post.text = text;
  //   }
  // });
  // res.status(200).json({ status: "success", code: 200, posts });
};

const deletePost = (req, res) => {
  // posts = posts.filter((post) => post.id !== Number(req.params.id));
  // res.status(200).json({ status: "success", code: 200, posts });
};

module.exports = { getPosts, getPostById, postPost, putPost, deletePost };
