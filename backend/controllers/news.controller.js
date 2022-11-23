const News = require("../models/news.model")
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

module.exports = {
  getNews,
  getNewsById
}
