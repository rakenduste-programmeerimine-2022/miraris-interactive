const News = require("../models/news.model")
const asyncHandler = require("express-async-handler")

const getNews = asyncHandler(async (req, res) => {
  const news = await News.find()

  res.status(200).json(news)
})

const getNewsById = asyncHandler(async (req, res) => {
  const news = await News.findById()

  res.status(200).json(news)
})

module.exports = {
  getNews,
  getNewsById
}
