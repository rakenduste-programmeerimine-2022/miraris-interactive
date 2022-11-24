const express = require("express")
const router = express.Router()
const {
  getNews,
  getNewsById,
  setComment
} = require("../controllers/news.controller")
const { protect } = require("../middleware/auth.middleware")

router.get("/", getNews)
router.get("/:id", getNewsById)
router.post("/", protect, setComment)

module.exports = router
