const Order = require('../models/Order');
const verify = require('../utility/verify_token');
const createOrder = async (req, res) => {
    try {
        await verify.verify_token(req, 'user');
        let order = new Order({ ...req.body })
        let response = await order.save();
        res.status(200).send(response);
    } catch (error) {
        res.status(400).send({ "error": error.message });
    }
}

const getOrders = async (req, res) => {

    try {
        await verify.verify_token(req);
        let orders = await Order.find({});
        res.status(200).send(orders);
    } catch (error) {

        res.status(400).send({ "error": error.message });
    }
}

const orderDetails = async (req, res) => {
    try {
        await verify.verify_token(req, 'admin');
        let order = await Order.findById(req.query.id);
        // if(!order){
        //     throw new Error('order not found with this id')
        // }
        res.status(200).send(order);
    } catch (error) {
        res.status(400).send({ "error": error.message });
    }
}

const updateOrder = async (req, res) => {

    try {
        await verify.verify_token(req, 'admin');
        let updatedOrder = await Order.findOneAndUpdate({ _id: req.query.id }, req.body, { new: true });
        res.status(200).send(updatedOrder);
    } catch (error) {
        res.status(400).send({ "error": error.message });
    }
}

const deleteOrder = async (req, res) => {
    try {
        await verify.verify_token(req, 'admin');
        let order = await Order.findByIdAndDelete(req.query.id);
        res.status(200).send(order);
    } catch (error) {
        res.status(400).send({ "error": error.message });
    }
}
module.exports = { createOrder, getOrders, orderDetails, updateOrder, deleteOrder }