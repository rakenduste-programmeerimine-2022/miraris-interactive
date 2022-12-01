const express = require("express")
const router = express.Router()
const {
  getCategories,
  getTopics,
  getTopicById,
  setPost,
  getPosts
} = require("../controllers/forum.controller")
const { protect } = require("../middleware/auth.middleware")

router.get("/", getCategories)
router.get("/category/:id", getTopics)
router.get("/topic/:id", getTopicById)
router.post("/topic", protect, setPost)
router.get("/topic/posts/:id", getPosts)

module.exports = router
