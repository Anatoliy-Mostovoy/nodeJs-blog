const Joi = require("joi");

module.exports = {
  postValidation: (req, res, next) => {
    const schema = Joi.object({
      text: Joi.string().min(3).max(30).required(),

      topic: Joi.string().min(3).max(30).required(),
    });
    const validate = schema.validate(req.body);
    if (validate.error) {
      return res.status(400).json({ message: validate.error.message });
    }
    next();
  },

  putValidation: (req, res, next) => {
    const schema = Joi.object({
      text: Joi.string().min(3).max(30),
      topic: Joi.string().min(3).max(30),
    });
    const validate = schema.validate(req.body);
    if (validate.error) {
      return res.status(400).json({ message: validate.error.message });
    }
    next();
  },
};
