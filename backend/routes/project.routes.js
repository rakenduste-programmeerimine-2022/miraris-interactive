const express = require("express")
const router = express.Router()
const { getProjects, getProjectById } = require("../controllers/project.controller")

router.get("/", getProjects)
router.get("http://localhost:3000/projects/project/:projectId", getProjectById)

module.exports = router
