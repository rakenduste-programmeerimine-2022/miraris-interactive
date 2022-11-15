const express = require("express")
const router = express.Router()
const { findProjects } = require("../controllers/project.controller")
const proxyMiddleware = require("../middleware/proxy.middleware")

router.post("/project", proxyMiddleware, findProjects)

module.exports = router
