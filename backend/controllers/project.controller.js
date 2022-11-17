const Project = require("../models/project.model")
const asyncHandler = require("express-async-handler")

// @desc    Get all projects
// @route   GET /api/projects
// @access  Public
const getProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find()

  res.status(200).json(projects)
})

// @desc    Get an individual project
// @route   GET /api/projects/:id
// @access  Public
const getIndividualProject = asyncHandler(async (req, res) => {
  const { _id, title, description, content } = await Project.findById(
    req.params.id
  )

  res.status(200).json({
    id: _id,
    title,
    description,
    content
  })
})

module.exports = {
  getProjects,
  getIndividualProject
}
