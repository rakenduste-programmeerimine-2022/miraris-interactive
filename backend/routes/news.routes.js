const express = require("express")
const router = express.Router()
const { getNews, getNewsById } = require("../controllers/news.controller")

router.get("/", getNews)
router.get("http://localhost:3000/news/newspage", getProjectById)

module.exports = router
