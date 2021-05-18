const chai = require("chai");
const chaiHttp = require("chai-http");

const { expect } = chai;
chai.use(chaiHttp);
var server = require( '../index' )
function sampleChaiTest(type,endpoint = "/",){
return type === "get" ? 
chai
.request(server)
.get(`/users${endpoint}`)
:
chai
.request(server)
.post(`/users${endpoint}`)
}
describe("", () => {
    it("Get all users!", done => {
      chai
        .request(server)
        .get("/users")
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        })
    })
})
describe("", () => {
    it("Get all users should be array!", done => {
        sampleChaiTest("get")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.a('array')
          done();
        })
    })
})
describe("", () => {
    it("Get all users length should be above 0", done => {
        sampleChaiTest("get")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.length > 0)
          done();
        })
    })
})
describe("", async() => {
    it("Cant register with empty body", done => {
     let request =  chai
        .request(server)
        .post("/users/register")
        .end((err, res) => {
          expect(res).to.have.status(400);
          done();
        })
    })
})
describe("", async() => {
    it("Must have username to register", done => {
     let request =  chai
        .request(server)
        .post("/users/register")
        .send({
            'password':"hjfejejfrej"
        })
        .end((err, res) => {
          expect(res).to.have.status(400);
          done();
        })
    })
})

describe("", async() => {
    it("Must have password to register", done => {
        sampleChaiTest("post","/register")
        .send({
            'username':"hjfejejfrej"
        })
        .end((err, res) => {
          expect(res).to.have.status(400);
          done();
        })
    })
})
// describe("", async() => {
//     it("username must be a string", done => {
//      let request =  chai
//         .request(server)
//         .post("/users/register")
//         .end((err, res) => {
//           expect(res).to.have.status(400);
//           done();
//         })
//     })
// })