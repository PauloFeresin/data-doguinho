const { Router } = require('express');

const routes = Router();

// exemplo
routes.get("/", (req, res) => {
    return res.json({message: "API monitor - online"})
})

module.exports = routes;
