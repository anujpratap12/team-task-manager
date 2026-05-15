import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import API from "../services/api"

function Tasks() {

  const [tasks, setTasks] = useState([])

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    projectId: "",
  })

  // Handle Input
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })

  }

  // Fetch Tasks
  const fetchTasks = async () => {

    try {

      const res = await API.get("/tasks")

      setTasks(res.data)

    } catch (error) {

      console.log(error)

    }

  }

  // Create Task
  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      await API.post(
        "/tasks",
        formData
      )

      alert("Task Created")

      setFormData({
        title: "",
        description: "",
        projectId: "",
      })

      fetchTasks()

    } catch (error) {

      console.log(error)

    }

  }

  // Update Task Status
  const updateStatus = async (id, status) => {

    try {

      await API.put(
        `/tasks/${id}`,
        { status }
      )

      fetchTasks()

    } catch (error) {

      console.log(error)

    }

  }

  useEffect(() => {

    fetchTasks()

  }, [])

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="p-8">

        <h1 className="text-3xl font-bold mb-6">
          Tasks
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
              placeholder="Task Title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

          </div>

          <div className="mb-4">

            <textarea
              name="description"
              placeholder="Task Description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

          </div>

          <div className="mb-4">

            <input
              type="text"
              name="projectId"
              placeholder="Project ID"
              value={formData.projectId}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

          </div>

          <button
            className="bg-black text-white px-6 py-3 rounded-lg"
          >
            Create Task
          </button>

        </form>

        {/* Task Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {tasks.map((task) => (

            <div
              key={task._id}
              className="bg-white p-6 rounded-xl shadow"
            >

              <h2 className="text-2xl font-bold mb-2">
                {task.title}
              </h2>

              <p className="text-gray-600 mb-4">
                {task.description}
              </p>

              <select
                value={task.status}
                onChange={(e) =>
                  updateStatus(
                    task._id,
                    e.target.value
                  )
                }
                className="border p-2 rounded-lg"
              >

                <option>
                  Todo
                </option>

                <option>
                  In Progress
                </option>

                <option>
                  Completed
                </option>

              </select>

            </div>

          ))}

        </div>

      </div>

    </div>
  )
}

export default Tasks