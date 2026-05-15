const Task = require("../models/Task")

// Create Task
const createTask = async (req, res) => {

  try {

    const {
      title,
      description,
      projectId,
    } = req.body

    const task = await Task.create({
      title,
      description,
      projectId,
    })

    res.status(201).json(task)

  } catch (error) {

    res.status(500).json({
      message: error.message,
    })

  }

}

// Get Tasks
const getTasks = async (req, res) => {

  try {

    const tasks = await Task.find()

    res.status(200).json(tasks)

  } catch (error) {

    res.status(500).json({
      message: error.message,
    })

  }

}

// Update Task Status
const updateTask = async (req, res) => {

  try {

    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    )

    res.status(200).json(task)

  } catch (error) {

    res.status(500).json({
      message: error.message,
    })

  }

}

module.exports = {
  createTask,
  getTasks,
  updateTask,
}