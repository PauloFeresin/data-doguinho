const { Router } = require('express');
const connectDB = require('../config/database');
const routes = Router();

// exemplo
routes.get("/", (req, res) => {
    return res.json({message: "API monitor - online"})
})

connectDB()
module.exports = routes;