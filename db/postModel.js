const mongoose = require("mongoose");

//* Задаем схему для будущих данных
const postSchema = new mongoose.Schema({
  topic: { type: String, required: true, unique: true },
  text: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

//* Компилируем модель
const Posts = mongoose.model("Posts", postSchema);

module.exports = { Posts };
