const chai = require("chai");
const chaiHttp = require("chai-http");

const { expect } = chai;
chai.use(chaiHttp);
var server = require( '../index' )

describe("", () => {
    it("Get all facts!", done => {
      chai
        .request(server)
        .get("/facts")
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        })
    })
})
describe("", () => {
    it("Response is an array", done => {
      chai
        .request(server)
        .get("/facts")
        .end((err, res) => {
          expect(res).to.have.status(200)
          expect(res.body).to.be.a('array')
          done();
        })
    })
})
describe("", () => {
  it("Every element is an object", done => {
    chai
      .request(server)
      .get("/facts")
      .end((err, res) => {
        expect(res).to.have.status(200)
        expect(res.body).to.be.a('array')
        expect(res.body.every(ele => expect(ele).to.be.a('object')))
        done();
      })
  })
})