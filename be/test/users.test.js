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
        sampleChaiTest("get")
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
        sampleChaiTest("post","/register")
        .end((err, res) => {
          expect(res).to.have.status(400);
          done();
        })
    })
})
describe("", async() => {
    it("Must have username to register", done => {
        sampleChaiTest("post","/register")
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
describe("", async() => {
    it("username fails if not a string", done => {
        sampleChaiTest("post","/register")
        .send({
            'username':1233456543,
            'password':'cvifjklefo0i'
        })
        .end((err, res) => {
          expect(res).to.have.status(400);
          done();
        })
    })
})
describe("", async() => {
    it("password fails if not a string", done => {
        sampleChaiTest("post","/register")
        .send({
            'username':'cvifjklefo0i',
            'password':1233456543
        })
        .end((err, res) => {
          expect(res).to.have.status(400);
          done();
        })
    })
})
describe("", async() => {
    it("if user exsist return 402", done => {
        sampleChaiTest("post","/register")
        .send({
            'username':"youremail15246@gmail.com",
            'password':'youremail152467@gmail.com'
        })
        .end((err, res) => {
          expect(res).to.have.status(402);
          done();
        })
    })
})

describe("", async() => {
    it("login", done => {
        sampleChaiTest("post","/login")
        .send({
            'username':"sdffgdsergftcxzsrtfcdsaer",
            'password':'youremail152467'
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.token)
          done();
        })
    })
})
describe("", async() => {
    it("Should return 401 with an invalid username", done => {
        sampleChaiTest("post","/login")
        .send({
            'username':"sdffgdsergftcxzsrtfcdsae",
            'password':'youremail152467'
        })
        .end((err, res) => {
          expect(res).to.have.status(401);
          done();
        })
    })
})
