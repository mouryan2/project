const express = require('express');
const router = express.Router();
const OrderController = require("../controller/OrderController")

router.post('/', OrderController.createOrder);
router.get('/', OrderController.getOrders);
router.get('/id', OrderController.orderDetails);
router.put('/', OrderController.updateOrder);
router.delete('/',OrderController.deleteOrder);
module.exports = router;