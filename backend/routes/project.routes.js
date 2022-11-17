const express = require("express")
const router = express.Router()
const { getProjects } = require("../controllers/project.controller")

router.get("/", getProjects)
router.get("/project/", getProjects)

module.exports = router
