const express = require("express")

const router = express.Router()

const {
  createProject,
  getProjects,
} = require("../controllers/projectController")

const authMiddleware = require("../middleware/authMiddleware")

router.post(
  "/",
  authMiddleware,
  createProject
)

router.get(
  "/",
  authMiddleware,
  getProjects
)

module.exports = router