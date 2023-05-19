"use strict";
const Path = require("path");
const {Validator} = require("uu_appg01_server").Validation;
const {DaoFactory} = require("uu_appg01_server").ObjectStore;
const {ValidationHelper} = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/say-hello-error.js");

const WARNINGS = {
  initUnsupportedKeys: {
    code: `${Errors.SayHello.UC_CODE}unsupportedKeys`,
  },
  sayHelloUnsupportedKeys: {
    code: `${Errors.SayHello.UC_CODE}unsupportedKeys`
  }
};

class SayHelloAbl {

  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("sayHello");
  }

  async sayHello(awid, dtoIn) {
    let uuAppErrorMap = {};
    let dtoOut = {
      text: "Hello World!",
      time: (new Date()).toISOString(),
      uuAppErrorMap: uuAppErrorMap
    };
    return dtoOut;
  }


  async sayMeHello(awid, dtoIn) {
    //HDS 1
    let uuAppErrorMap = {};
    let validationResult = this.validator.validate("sayHelloDtoInType", dtoIn);//A1, A2
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      WARNINGS.sayHelloUnsupportedKeys.code,
      Errors.SayHello.InvalidDtoIn
    );
    //HDS 2 - Save name
    let dtoOut = await this.dao.create(awid, dtoIn.name);

    //HDS 3 - return dtoOut
    dtoOut.uuAppErrorMap = uuAppErrorMap;

    return dtoOut;
  }

  async getHello(awid, dtoIn) {
    //HDS 1
    let uuAppErrorMap = {};
    let validationResult = this.validator.validate("getHelloDtoInType", dtoIn);//A1, A2
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      WARNINGS.sayHelloUnsupportedKeys.code,
      Errors.SayHello.InvalidDtoIn
    );
    //HDS 2 - Save name
    let dtoOut = await this.dao.get(awid, dtoIn.name);

    //HDS 3 - return dtoOut
    dtoOut.uuAppErrorMap = uuAppErrorMap;

    return dtoOut;
  }

  async listHello(awid, dtoIn) {
    //HDS 1
    let uuAppErrorMap = {};
    //HDS 2 - Save name
    let dtoOut = await this.dao.listAll(awid);

    //HDS 3 - return dtoOut
    dtoOut.uuAppErrorMap = uuAppErrorMap;

    return dtoOut;
  }

  async deleteHello(awid, dtoIn) {
    //HDS 1
    let uuAppErrorMap = {};
    //HDS 2 - Save name
    let dtoOut = {};
    await this.dao.delete(awid, dtoIn.id);

    //HDS 3 - return dtoOut
    dtoOut.uuAppErrorMap = uuAppErrorMap;

    return dtoOut;
  }

}

module
  .exports = new SayHelloAbl();
