// //let mongoose = require('mongoose');
// var Mongoose = require('mongoose').Mongoose;
// var mongoose = new Mongoose();

// var Mockgoose = require('mockgoose').Mockgoose;
// var mockgoose = new Mockgoose(mongoose);
const middleware = require('../utility/verify_token');
let Order = require('../models/Order');
let chai = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);
let app = require('../index.js');
let should = chai.should();

describe("orders", () => {

   // beforeEach();

    // afterEach(
    //     (done) => {
    //         Order.delete({}, (err) => {
    //             done();
    //         });
    //     }
    // )

    // before((done) => {
    //     mockgoose.prepareStorage().then(function () {
    //         mongoose.connect('mongodb://localhost:27017/TestingDB', function (err) {
    //             done(err);
    //         });
    //     });
    // });


    describe("POST /order", () => {

        let order = {
            productName: "onelpus-nord",
            productBrand: "oneplus",
            productPrice: 28000,
            productRating: 4.3,
            productDescription: "it's handy to usee"
        }
        it("api should create an order", (done) => {

            chai.request(app.server)
                .post('/order')
                .send(order)
                .end((error, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('_id');
                    done();
                })
        })


        
    })


    describe("GET  /order", () => {
        it("api should return all orders", (done) => {
            chai.request(app.server)
                .get('/order')
                .end((error, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                })
        })
    })

    describe("GET  /order/id", () => {
        it("api should return an order by id", (done) => {
            chai.request(app.server)
                .get('/order/id')
                .end((error, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                })
        })
    })

    describe("PUT  /order/id", () => {
        it("api should replace the existing order", (done) => {
            let orderDetails = new Order({
                productName: "onelpus-nord", productBrand: "oneplus",
                productPrice: 28000, productRating: 4.3, productDescription: "it's handy to usee"
            })

            orderDetails.save((err, orderRes) => {
                chai.request(app.server)
                    .put('/order')
                    .query({ id: orderRes.id })
                    .send({
                        productName: "onelpus-nord2", productBrand: "oneplus",
                        productPrice: 30000, productRating: 4.3, productDescription: "it's handy to usee"
                    })
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('productName').eql("onelpus-nord2")
                        done();
                    })
            })

        })
    })

    describe('DELETE  /order', () => {
        it('api should delete a order by id', (done) => {
            let orderDetails = new Order({
                productName: "onelpus-nord", productBrand: "oneplus",
                productPrice: 28000, productRating: 4.3, productDescription: "it's handy to usee"
            })
            orderDetails.save((err, order) => {
                chai.request(app.server)
                    .delete('/order')
                    .query({ id: order.id })
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        done();
                    });
            });
        });
    });

})