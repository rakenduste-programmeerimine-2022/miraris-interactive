const ForumCategory = require("../models/forumCategory.model")
const ForumTopic = require("../models/forumTopic.model")
const ForumPost = require("../models/forumPost.model")
const asyncHandler = require("express-async-handler")

// @desc    Get all categories
// @route   GET /api/forum
// @access  Public
const getCategories = asyncHandler(async (req, res) => {
  const categories = await ForumCategory.find()

  res.status(200).json(categories)
})

// @desc    Get topics
// @route   GET /api/forum/category/:id
// @access  Public
const getTopics = asyncHandler(async (req, res) => {
  const topics = await ForumTopic.find({ category: req.params.id })

  res.status(200).json(topics)
})

// @desc    Get individual topics
// @route   GET /api/forum/topic/:id
// @access  Public
const getTopicById = asyncHandler(async (req, res) => {
  const { _id, category, topic, description } = await ForumTopic.findById(
    req.params.id
  )

  res.status(200).json({
    id: _id,
    category,
    topic,
    description
  })
})

// @desc    Set post
// @route   POST /api/forum/post/:id
// @access  Private
const setPost = asyncHandler(async (req, res) => {
  const { id, postTitle, postBody } = req.body

  if (!id || !postTitle || !postBody) {
    res.status(400)
    throw new Error("Please add all fields")
  }

  const post = await ForumPost.create({
    topic: id,
    user: req.user.id,
    title: postTitle,
    body: postBody
  })

  res.status(200).json(post)
})

// @desc    Get posts
// @route   GET /api/forum/topic/posts/:id
// @access  Public
const getPosts = asyncHandler(async (req, res) => {
  const posts = await ForumPost.find({ topic: req.params.id }).populate(
    "user",
    "name"
  )

  res.status(200).json(posts)
})

module.exports = {
  getCategories,
  getTopics,
  getTopicById,
  setPost,
  getPosts
}
