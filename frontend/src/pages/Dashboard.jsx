import { useEffect, useState } from "react"

import Navbar from "../components/Navbar"

import API from "../services/api"

function Dashboard() {

  const [tasks, setTasks] = useState([])

  // Fetch tasks
  const fetchTasks = async () => {

    try {

      const res = await API.get("/tasks")

      setTasks(res.data)

    } catch (error) {

      console.log(error)

    }

  }

  useEffect(() => {

    fetchTasks()

  }, [])

  // Stats
  const totalTasks = tasks.length

  const completedTasks =
    tasks.filter(
      (task) => task.status === "Completed"
    ).length

  const pendingTasks =
    tasks.filter(
      (task) => task.status !== "Completed"
    ).length

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="p-8">

        <h2 className="text-3xl font-bold mb-6">
          Dashboard
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Total */}
          <div className="bg-white p-6 rounded-xl shadow">

            <h3 className="text-xl font-semibold">
              Total Tasks
            </h3>

            <p className="text-4xl mt-4 font-bold">
              {totalTasks}
            </p>

          </div>

          {/* Completed */}
          <div className="bg-white p-6 rounded-xl shadow">

            <h3 className="text-xl font-semibold">
              Completed Tasks
            </h3>

            <p className="text-4xl mt-4 font-bold text-green-600">
              {completedTasks}
            </p>

          </div>

          {/* Pending */}
          <div className="bg-white p-6 rounded-xl shadow">

            <h3 className="text-xl font-semibold">
              Pending Tasks
            </h3>

            <p className="text-4xl mt-4 font-bold text-red-500">
              {pendingTasks}
            </p>

          </div>

        </div>

        {/* Recent Tasks Section */}
        <div className="mt-10 bg-white p-6 rounded-xl shadow">

          <h2 className="text-2xl font-bold mb-4">
            Recent Tasks
          </h2>

          {
            tasks.length === 0 ? (

              <p className="text-gray-600">
                No tasks available.
              </p>

            ) : (

              <div className="space-y-4">

                {
                  tasks.slice(0, 5).map((task) => (

                    <div
                      key={task._id}
                      className="border p-4 rounded-lg flex justify-between items-center"
                    >

                      <div>

                        <h3 className="font-semibold text-lg">
                          {task.title}
                        </h3>

                        <p className="text-gray-600">
                          {task.description}
                        </p>

                      </div>

                      <span
                        className={`px-4 py-2 rounded-lg text-white ${
                          task.status === "Completed"
                            ? "bg-green-500"
                            : task.status === "In Progress"
                            ? "bg-yellow-500"
                            : "bg-red-500"
                        }`}
                      >
                        {task.status}
                      </span>

                    </div>

                  ))
                }

              </div>

            )
          }

        </div>

        {/* Footer */}
        <div className="text-center py-6 text-gray-500">

          Team Task Manager © 2026

        </div>

      </div>

    </div>
  )
}

export default Dashboard