const express = require("express")

const router = express.Router()

const {
  createTask,
  getTasks,
  updateTask,
} = require("../controllers/taskController")

const authMiddleware = require("../middleware/authMiddleware")

router.post(
  "/",
  authMiddleware,
  createTask
)

router.get(
  "/",
  authMiddleware,
  getTasks
)

router.put(
  "/:id",
  authMiddleware,
  updateTask
)

module.exports = router