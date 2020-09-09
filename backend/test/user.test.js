const User = require('../models/User');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect
chai.use(chaiHttp);
let app = require('../index.js');

describe("users", () => {




    describe("USER-SIGNUP /POST", () => {

        it("api should create an user",  (done) => {

            setTimeout(() => { }, 10000)
             chai.request(app.server)
                .post('/user/signup')
                .send({
                    userId: "mouri2",
                    password: "Mouri@890@"
                })
                .end((err, res) => {
                    expect(res.status).to.equal(200)
                    expect(res.body).to.haveOwnProperty('message')
                    // done();

                })


            done();
        })

    })


    // describe("USER-SIGNIN /POST", () => {

    //     it("api should login user", (done) => {
    //         chai.request(app.server)
    //             .post('/user/signin')
    //             .send({
    //                 userId: "mouri2",
    //                 password: "Mouri@890@"
    //             })
    //             .end((err, res) => {
    //                 expect(res.status).to.equal(200)
    //                 done();
    //             })

    //     })
    // })
})