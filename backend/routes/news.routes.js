const express = require("express")
const router = express.Router()
const {
  getNews,
  getNewsById,
  setComment,
  getComments
} = require("../controllers/news.controller")
const { protect } = require("../middleware/auth.middleware")

router.get("/", getNews)
router.get("/:id", getNewsById)
router.post("/", protect, setComment)
router.get("/comments/:id", getComments)

module.exports = router
