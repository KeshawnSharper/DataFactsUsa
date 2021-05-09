const chai = require("chai");
const chaiHttp = require("chai-http");
const jwt = require("jsonwebtoken")
const { expect } = chai;
chai.use(chaiHttp);
var server = require( '../index' )
const users = require("../router/users/users-model");

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
describe("", () => {
  it("Returns a ID thats a number", done => {
    chai
      .request(server)
      .post("/facts")
      .send({
        "title":"wassup",
        "user_id":1,
        "description":"errtkfkhbm"
      })
      .end((err, res) => {
        expect(res).to.have.status(200)
        expect(res.body.id).to.be.a("number")
        done();
      })
  })
})
describe("", () => {
  it("Test if the server fails when you forget the title property", done => {
    chai
      .request(server)
      .post("/facts")
      .send({
        "user_id":1,
        "description":"errtkfkhbm"
      })
      .end((err, res) => {
        expect(res).to.have.status(500)
        expect(res.body.message === "Please add a title property")
        done();
      })
  })
})
describe("", () => {
  it("Test if the server fails when you forget the user id  property", done => {
    chai
      .request(server)
      .post("/facts")
      .send({
        "title":"hello",
        "description":"errtkfkhbm"
      })
      .end((err, res) => {
        expect(res).to.have.status(500)
        expect(res.body.message === "Please add a user_id property")
        done();
      })
  })
})
describe("", async () => {
  let userCount = await users.countDocuments()
  it("Should fail if user doesn't exsist ", done => {
    chai
      .request(server)
      .post("/facts")
      .send({
        "title":"hello",
        "user_id":userCount + 1,
        "description":"errtkfkhbm"
      })
      .end((err, res) => {
        expect(res).to.have.status(500)
        expect(res.body.message === "User Doesn't exsist")
        done();
      })
  })
})
// describe("", async () => {
//   let userCount = await users.countDocuments()
//   it("Verify a token", done => {
//     // jwt.verify("ftgyh5uj6tgrfdethydfedju", "hello", () => {
//     //   console.log("hello") // bar
//     // })
//     chai
//       .request(server)
//       .post("/facts")
//       .send({
//         "title":"hello",
//         "user_id":userCount + 1,
//         "description":"errtkfkhbm"
//       })
//       .end((err, res) => {
//         expect(res).to.have.status(500)
//         expect(res.body.message === "User Doesn't exsist")
//         done();
//       })
//   })
// })
describe("", async () => {
  let userCount = await users.countDocuments()
  it("Should fail if user doesn't exsist ", done => {
    chai
      .request(server)
      .post("/facts")
      .send({
        "title":"hello",
        "user_id":userCount + 1,
        "description":"errtkfkhbm"
      })
      .end((err, res) => {
        expect(res).to.have.status(500)
        expect(res.body.message === "User Doesn't exsist")
        done();
      })
  })
})
describe("", async () => {
  let userCount = await users.countDocuments()
  it("Should fail if user doesn't exsist ", done => {
    chai
      .request(server)
      .post("/facts")
      .send({
        "title":"hello",
        "user_id":userCount + 1,
        "description":"errtkfkhbm"
      })
      .end((err, res) => {
        expect(res).to.have.status(500)
        expect(res.body.message === "User Doesn't exsist")
        done();
      })
  })
})
describe("", async () => {
  let userCount = await users.countDocuments()
  it("Should fail if user doesn't exsist ", done => {
    chai
      .request(server)
      .post("/facts")
      .send({
        "title":"hello",
        "user_id":userCount + 1,
        "description":"errtkfkhbm"
      })
      .end((err, res) => {
        expect(res).to.have.status(500)
        expect(res.body.message === "User Doesn't exsist")
        done();
      })
  })
})