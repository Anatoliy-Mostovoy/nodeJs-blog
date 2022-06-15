const { VAlidationError, WrongParametersError } = require("./error");

const asyncWrapper = (controller) => {
  return (req, res, next) => {
    controller(req, res).catch((err) => {
      return next(err);
    });
  };
};

const errorHandler = (err, req, res, next) => {
  if (err instanceof VAlidationError || err instanceof WrongParametersError) {
    return res.status(err.status).json({ message: err.message });
  }
  res.status(500).json({ message: err.message });
};
module.exports = { asyncWrapper, errorHandler };
