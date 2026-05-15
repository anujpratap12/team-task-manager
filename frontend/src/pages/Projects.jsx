import { useEffect, useState } from "react"
import API from "../services/api"

function Projects() {

  const [projects, setProjects] = useState([])

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  })

  // Handle input
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })

  }

  // Fetch projects
  const fetchProjects = async () => {

    try {

      const res = await API.get("/projects")

      setProjects(res.data)

    } catch (error) {

      console.log(error)

    }

  }

  // Create project
  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      await API.post(
        "/projects",
        formData
      )

      alert("Project Created")

      setFormData({
        title: "",
        description: "",
      })

      fetchProjects()

    } catch (error) {

      console.log(error)

    }

  }

  useEffect(() => {

    fetchProjects()

  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-3xl font-bold mb-6">
        Projects
      </h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow mb-8"
      >

        <div className="mb-4">

          <input
            type="text"
            name="title"
            placeholder="Project Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

        </div>

        <div className="mb-4">

          <textarea
            name="description"
            placeholder="Project Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

        </div>

        <button
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          Create Project
        </button>

      </form>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {projects.map((project) => (

          <div
            key={project._id}
            className="bg-white p-6 rounded-xl shadow"
          >

            <h2 className="text-2xl font-bold mb-2">
              {project.title}
            </h2>

            <p className="text-gray-600">
              {project.description}
            </p>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Projects