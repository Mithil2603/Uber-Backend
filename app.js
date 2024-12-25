const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send("<h1>Hello World</h1>");
})

module.exports = app;