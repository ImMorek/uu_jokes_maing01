"use strict";
const SayHelloAbl = require("../../abl/say-hello-abl.js");

class SayHelloController {

  sayHello(ucEnv) {
    return SayHelloAbl.sayHello(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  sayMeHello(ucEnv) {
    return SayHelloAbl.sayMeHello(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  getHello(ucEnv) {
    return SayHelloAbl.getHello(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }
  listHello(ucEnv) {
    return SayHelloAbl.listHello(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }
  deleteHello(ucEnv) {
    return SayHelloAbl.deleteHello(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

}

module.exports = new SayHelloController();
