"use strict";

const JokesMainUseCaseError = require("./jokes-main-use-case-error.js");
const SAY_HELLO_ERROR_PREFIX = `${JokesMainUseCaseError.ERROR_PREFIX}sayHello/`;

const SayHello = {
  UC_CODE: `${SAY_HELLO_ERROR_PREFIX}sayHello/`,

  InvalidDtoIn: class extends JokesMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${SayHello.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
};

module.exports = {
  SayHello
};
