"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class SayHelloMongo extends UuObjectDao {

  async createSchema(){
    await super.createIndex({awid: 1, _id: 1}, {unique: true});
  }

  async create(awid, name) {
    return await super.insertOne({awid, name});
  }

  async get(awid, name) {
    let filter = {
      awid: awid,
      name: name,
    };
    return await super.find(filter);
  }

  async listAll(awid, dtoIn = {}) {
    let sort = {
      [dtoIn.sortBy]: dtoIn.order === "asc" ? 1 : -1
    };
    return await super.find({awid}, dtoIn.pageInfo, sort);
  }

  async delete(awid, id) {
    return await super.deleteOne({awid, id});
  }


}

module.exports = SayHelloMongo;
