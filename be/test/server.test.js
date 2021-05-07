const assert = require('assert');
const chai = require("chai");
const chaiHttp = require("chai-http");

const { expect } = chai;
chai.use(chaiHttp);
var server = require( '../index' )

describe("Server!", () => {
    it("welcomes user to the api", done => {
      chai
        .request(server)
        .get("/")
        .end((err, res) => {
          expect(res).to.have.status(404);
          done();
        })
    })
})

