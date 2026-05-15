const Project = require("../models/Project")

// Create Project
const createProject = async (req, res) => {

  try {

    const { title, description } = req.body

    const project = await Project.create({
      title,
      description,
      createdBy: req.user.id,
    })

    res.status(201).json(project)

  } catch (error) {

    res.status(500).json({
      message: error.message,
    })

  }

}

// Get Projects
const getProjects = async (req, res) => {

  try {

    const projects = await Project.find()

    res.status(200).json(projects)

  } catch (error) {

    res.status(500).json({
      message: error.message,
    })

  }

}

module.exports = {
  createProject,
  getProjects,
}