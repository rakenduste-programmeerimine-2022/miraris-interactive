const Project = require("../models/project.model")
const asyncHandler = require("express-async-handler")

const getProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find()

  res.status(200).json(projects)
})

const  getProjectById = asyncHandler(async (req, res) => {
  const project = await Project.findById()

  res.status(200).json(project)
}) 

module.exports = {
  getProjects, getProjectById
}
