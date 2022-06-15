const mongoose = require("mongoose");

//* Задаем схему для будущих данных
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  firstName: String,
  lastName: String,
  title: String,
  bio: String,
  password: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

//* Компилируем модель
const User = mongoose.model("User", userSchema);

module.exports = { User };
