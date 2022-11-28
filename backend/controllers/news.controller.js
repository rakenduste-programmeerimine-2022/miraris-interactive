const News = require("../models/news.model")
const Comment = require("../models/comment.model")
const asyncHandler = require("express-async-handler")

// @desc    Get all news
// @route   GET /api/news
// @access  Public
const getNews = asyncHandler(async (req, res) => {
  const news = await News.find()

  res.status(200).json(news)
})

// @desc    Get individual news
// @route   GET /api/news/:id
// @access  Public
const getNewsById = asyncHandler(async (req, res) => {
  const { _id, header, introduction, body } = await News.findById(req.params.id)

  res.status(200).json({
    id: _id,
    header,
    introduction,
    body
  })
})

// @desc    Set comment
// @route   POST /api/news/:id
// @access  Private
const setComment = asyncHandler(async (req, res) => {
  const { id, commentBody } = req.body

  if (!id || !commentBody) {
    res.status(400)
    throw new Error("Please add all fields")
  }

  const comment = await Comment.create({
    user: req.user.id,
    post: id,
    comment: commentBody
  })

  res.status(200).json(comment)
})

module.exports = {
  getNews,
  getNewsById,
  setComment
}
