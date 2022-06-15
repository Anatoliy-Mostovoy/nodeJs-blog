class VAlidationError extends Error {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}
class WrongParametersError extends Error {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}

class notAuthorizeError extends Error {
  constructor(message) {
    super(message);
    this.status = 401;
  }
}

module.exports = { VAlidationError, WrongParametersError, notAuthorizeError };
