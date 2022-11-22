const express = require("express")
const router = express.Router()
const {
  getProjects,
  getIndividualProject
} = require("../controllers/project.controller")

router.get("/", getProjects)
router.get("/:id", getIndividualProject)

module.exports = router
