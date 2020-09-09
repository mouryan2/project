const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const mongoose = require('mongoose');
const orderRoutes = require('./routes/OrderRoutes');
const userRoutes = require('./routes/UserRoutes');

app.use(express.json());

// app.get("/", (req, res) => {
//     res.send("hello world")
// })

app.use("/order", orderRoutes);
app.use("/user", userRoutes);
mongoose.connect('mongodb://localhost:27017/order',
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
    () => {
        console.log('db - connected');
    })
const server = app.listen(8080, () => {
    console.log("port started");
})

module.exports = { server };