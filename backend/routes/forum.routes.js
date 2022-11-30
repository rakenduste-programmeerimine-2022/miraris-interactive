const express = require("express")
const router = express.Router()
const { getCategories, getTopics } = require("../controllers/forum.controller")

router.get("/", getCategories)
router.get("/category/:id", getTopics)

module.exports = router
