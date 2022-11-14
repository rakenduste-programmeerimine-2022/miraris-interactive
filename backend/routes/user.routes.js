const express = require("express")
const router = express.Router()
const { registerUser, loginUser } = require("../controllers/user.controller")
const proxyMiddleware = require("../middleware/proxy.middleware")

router.post("/", proxyMiddleware, registerUser)
router.post("/login", proxyMiddleware, loginUser)

module.exports = router
