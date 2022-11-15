const Project = require("../models/project.model")
const asyncHandler = require("express-async-handler")

const findProjects = asyncHandler(async (req, res) => {
  const readProject = await Project.findById({ id })
})

module.exports = {
  findProjects
}
