const ForumCategory = require("../models/forumCategory.model")
const ForumTopic = require("../models/forumTopic.model")
const asyncHandler = require("express-async-handler")

// @desc    Get all categories
// @route   GET /api/forum
// @access  Public
const getCategories = asyncHandler(async (req, res) => {
  const categories = await ForumCategory.find()

  res.status(200).json(categories)
})

// @desc    Get topics
// @route   GET /api/forum/categories/:id
// @access  Public
const getTopics = asyncHandler(async (req, res) => {
  const topics = await ForumTopic.find({ category: req.params.id })

  res.status(200).json(topics)
})

module.exports = {
  getCategories,
  getTopics
}
